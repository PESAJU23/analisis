import React from "react";

const Login = () => {
    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "radial-gradient(ellipse at center, #0a1622 0%, #0a0f1a 100%)",
            color: "#fff"
        }}>
            <div style={{
                display: "flex",
                background: "rgba(10, 20, 34, 0.8)",
                borderRadius: "12px",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                padding: "48px 32px",
                gap: "64px"
            }}>
                {/* Left Side */}
                <div style={{ minWidth: 350 }}>
                    <div style={{ fontWeight: 700, fontSize: 20, color: "#6ec1e4", marginBottom: 32 }}>
                        <span style={{ marginRight: 8 }}>✦</span>Sitemark
                    </div>
                    <div style={{ marginBottom: 24 }}>
                        <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 4 }}>
                            <span role="img" aria-label="gear" style={{ marginRight: 8 }}>⚙️</span>
                            Adaptable performance
                        </div>
                        <div style={{ color: "#b0b8c1", fontSize: 14 }}>
                            Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.
                        </div>
                    </div>
                    <div style={{ marginBottom: 24 }}>
                        <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 4 }}>
                            <span role="img" aria-label="tools" style={{ marginRight: 8 }}>🛠️</span>
                            Built to last
                        </div>
                        <div style={{ color: "#b0b8c1", fontSize: 14 }}>
                            Experience unmatched durability that goes above and beyond with lasting investment.
                        </div>
                    </div>
                    <div style={{ marginBottom: 24 }}>
                        <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 4 }}>
                            <span role="img" aria-label="thumbs up" style={{ marginRight: 8 }}>👍</span>
                            Great user experience
                        </div>
                        <div style={{ color: "#b0b8c1", fontSize: 14 }}>
                            Integrate our product into your routine with an intuitive and easy-to-use interface.
                        </div>
                    </div>
                    <div>
                        <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 4 }}>
                            <span role="img" aria-label="sparkles" style={{ marginRight: 8 }}>✨</span>
                            Innovative functionality
                        </div>
                        <div style={{ color: "#b0b8c1", fontSize: 14 }}>
                            Stay ahead with features that set new standards, addressing your evolving needs better than the rest.
                        </div>
                    </div>
                </div>
                {/* Right Side */}
                <form style={{
                    minWidth: 350,
                    background: "#101a28",
                    borderRadius: 12,
                    padding: "32px 32px",
                    boxShadow: "0 2px 16px 0 rgba(0,0,0,0.12)"
                }}>
                    <div style={{ fontWeight: 700, fontSize: 32, marginBottom: 24 }}>Sign in</div>
                    <div style={{ marginBottom: 16 }}>
                        <label style={{ display: "block", fontSize: 14, marginBottom: 6 }}>Email</label>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            style={{
                                width: "100%",
                                padding: "10px 12px",
                                borderRadius: 6,
                                border: "none",
                                background: "#0a1622",
                                color: "#fff",
                                fontSize: 15,
                                outline: "none"
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: 8 }}>
                        <label style={{ display: "block", fontSize: 14, marginBottom: 6 }}>
                            Password
                            <span style={{ float: "right", color: "#b0b8c1", fontSize: 13, cursor: "pointer" }}>
                                Forgot your password?
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            style={{
                                width: "100%",
                                padding: "10px 12px",
                                borderRadius: 6,
                                border: "1.5px solid #1a2940",
                                background: "#0a1622",
                                color: "#fff",
                                fontSize: 15,
                                outline: "none"
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: 24 }}>
                        <label style={{ fontSize: 14 }}>
                            <input type="checkbox" style={{ marginRight: 8 }} />
                            Remember me
                        </label>
                    </div>
                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "12px 0",
                            borderRadius: 6,
                            border: "none",
                            background: "#fff",
                            color: "#101a28",
                            fontWeight: 600,
                            fontSize: 16,
                            marginBottom: 16,
                            cursor: "pointer"
                        }}
                    >
                        Sign in
                    </button>
                    <div style={{ textAlign: "center", fontSize: 14, marginBottom: 16 }}>
                        Don't have an account? <span style={{ color: "#6ec1e4", cursor: "pointer" }}>Sign up</span>
                    </div>
                    <div style={{ textAlign: "center", color: "#b0b8c1", marginBottom: 16 }}>or</div>
                    <button
                        type="button"
                        style={{
                            width: "100%",
                            padding: "10px 0",
                            borderRadius: 6,
                            border: "1px solid #1a2940",
                            background: "transparent",
                            color: "#fff",
                            fontWeight: 500,
                            fontSize: 15,
                            marginBottom: 12,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 8,
                            cursor: "pointer"
                        }}
                    >
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" style={{ width: 20, marginRight: 8 }} />
                        Sign in with Google
                    </button>
                    <button
                        type="button"
                        style={{
                            width: "100%",
                            padding: "10px 0",
                            borderRadius: 6,
                            border: "1px solid #1a2940",
                            background: "transparent",
                            color: "#fff",
                            fontWeight: 500,
                            fontSize: 15,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 8,
                            cursor: "pointer"
                        }}
                    >
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" style={{ width: 20, marginRight: 8 }} />
                        Sign in with Facebook
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;