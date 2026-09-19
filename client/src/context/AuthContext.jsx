import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext(null);

const API_URL = "http://localhost:8080/api";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ==================================================
  // LOAD SAVED USER
  // ==================================================

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);

        setUser(parsedUser);
      } catch (error) {
        console.error("Invalid stored user:", error);

        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    }

    setLoading(false);
  }, []);

  // ==================================================
  // REGISTER
  // ==================================================

  const register = async (username, email, password) => {
    const response = await fetch(
      `${API_URL}/auth/register`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          username,
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Registration failed"
      );
    }

    return data;
  };

  // ==================================================
  // LOGIN
  // ==================================================

  const login = async (email, password) => {
    const response = await fetch(
      `${API_URL}/auth/login`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Login failed"
      );
    }

    // ----------------------------------------------
    // Save JWT token
    // ----------------------------------------------

    localStorage.setItem(
      "token",
      data.token
    );

    // ----------------------------------------------
    // Save user information
    // ----------------------------------------------

    const userData = {
      userId: data.userId,
      username: data.username,
      email: data.email,
      role: data.role,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    // ----------------------------------------------
    // Update React state
    // ----------------------------------------------

    setUser(userData);

    return data;
  };

  // ==================================================
  // LOGOUT
  // ==================================================

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);
  };

  // ==================================================
  // AUTHENTICATION STATUS
  // ==================================================

  const isAuthenticated = !!user;

  // ==================================================
  // CONTEXT VALUE
  // ==================================================

  const value = {
    user,
    loading,
    isAuthenticated,

    register,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// ==================================================
// CUSTOM AUTH HOOK
// ==================================================

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
};