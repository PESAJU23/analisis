import React, { useState } from "react";

const Registrase = () => {
    const [form, setForm] = useState({
        nombre: "",
        email: "",
        password: "",
        updates: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el registro
        alert("Registro enviado");
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#f5f7fa", // Fondo claro
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    background: "#fff", // Card blanco
                    padding: "2.5rem 2rem",
                    borderRadius: "16px",
                    boxShadow: "0 4px 32px #0001",
                    width: "100%",
                    maxWidth: "400px",
                    color: "#222", // Texto oscuro
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                }}
            >
                <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                    <img
                        src="/logo192.png"
                        alt="Sitemark"
                        style={{ width: 36, marginBottom: 8 }}
                    />
                    <h2 style={{ fontWeight: 700, fontSize: "2rem", margin: 0 }}>Regístrate</h2>
                </div>
                <label>
                    Nombre completo
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Jon Nieve"
                        value={form.nombre}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                    />
                </label>
                <label>
                    Correo electrónico
                    <input
                        type="email"
                        name="email"
                        placeholder="tu@email.com"
                        value={form.email}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                    />
                </label>
                <label>
                    Contraseña
                    <input
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        value={form.password}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                    />
                </label>
                <label style={{ display: "flex", alignItems: "center", fontSize: 14 }}>
                    <input
                        type="checkbox"
                        name="updates"
                        checked={form.updates}
                        onChange={handleChange}
                        style={{ marginRight: 8 }}
                    />
                    Quiero recibir actualizaciones por correo electrónico.
                </label>
                <button
                    type="submit"
                    style={{
                        background: "#15aa99", // Botón primario verde
                        color: "#fff",
                        border: "none",
                        borderRadius: 6,
                        padding: "0.75rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        marginTop: 8,
                    }}
                >
                    Regístrate
                </button>
                <div
                    style={{
                        borderTop: "1px solid #e0e0e0",
                        margin: "1rem 0 0.5rem 0",
                        position: "relative",
                        textAlign: "center",
                    }}
                >
                    <span
                        style={{
                            background: "#fff",
                            color: "#b0b0b0",
                            padding: "0 10px",
                            position: "relative",
                            top: -12,
                            fontSize: 12,
                        }}
                    >
                        o
                    </span>
                </div>
                <button
                    type="button"
                    style={{
                        ...socialBtnStyle,
                        background: "#fff",
                        color: "#222",
                        border: "1px solid #e0e0e0",
                    }}
                >
                    <span style={{ marginRight: 8 }}>🔵</span> Regístrese con Google
                </button>
                <button
                    type="button"
                    style={{
                        ...socialBtnStyle,
                        background: "#f5f7fa",
                        color: "#1976d2",
                        border: "1px solid #e0e0e0",
                    }}
                >
                    <span style={{ marginRight: 8 }}>🔵</span> Regístrese con Facebook
                </button>
                <div style={{ textAlign: "center", fontSize: 14, marginTop: 8 }}>
                    ¿Ya tienes una cuenta?{" "}
                    <a href="/login" style={{ color: "#15aa99", textDecoration: "underline" }}>
                        Iniciar sesión
                    </a>
                </div>
            </form>
        </div>
    );
};

const inputStyle = {
    width: "100%",
    padding: "0.7rem",
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 6,
    border: "1px solid #e0e0e0",
    background: "#f5f7fa",
    color: "#222",
    fontSize: 16,
};

const socialBtnStyle = {
    width: "100%",
    padding: "0.7rem",
    borderRadius: 6,
    border: "none",
    fontWeight: 600,
    fontSize: 15,
    cursor: "pointer",
    marginBottom: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

export default Registrase;