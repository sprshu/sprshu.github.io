"use client";

import { useState } from "react";

const fieldStyle: React.CSSProperties = {
  padding: "14px 16px",
  borderRadius: "13px",
  border: "1px solid rgba(26,24,21,0.12)",
  background: "rgba(255,255,255,0.8)",
  fontSize: "15px",
  fontFamily: "inherit",
  outline: "none",
};

const labelText: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: 600,
  color: "#4a463f",
};

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "56px 30px",
          borderRadius: "24px",
          background: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.7)",
          boxShadow: "0 20px 56px -24px rgba(120,70,30,0.35)",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            background: "linear-gradient(135deg,#4a443d,#1a1815)",
            margin: "0 auto 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "30px",
          }}
        >
          ✓
        </div>
        <div
          style={{
            fontFamily: "'Zen Kaku Gothic New',sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            marginBottom: "8px",
          }}
        >
          送信ありがとうございます！
        </div>
        <p style={{ margin: "0 0 22px", color: "#6a655c", fontSize: "14px" }}>
          内容を確認のうえ、折り返しご連絡いたします。
        </p>
        <button
          onClick={() => {
            setSent(false);
            setName("");
            setEmail("");
            setMsg("");
          }}
          style={{
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 600,
            padding: "11px 24px",
            borderRadius: "999px",
            background: "rgba(26,24,21,0.06)",
            color: "#1a1815",
          }}
        >
          別の内容を送る
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      data-reveal
      style={{
        padding: "clamp(24px,4vw,40px)",
        borderRadius: "24px",
        background: "rgba(255,255,255,0.55)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.7)",
        boxShadow: "0 22px 60px -26px rgba(120,70,30,0.4)",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
      }}
    >
      <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <span style={labelText}>お名前</span>
        <input
          className="field"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="山田 太郎"
          style={fieldStyle}
        />
      </label>
      <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <span style={labelText}>メールアドレス</span>
        <input
          className="field"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          style={fieldStyle}
        />
      </label>
      <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <span style={labelText}>メッセージ</span>
        <textarea
          className="field"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          rows={4}
          placeholder="ご相談内容をご記入ください"
          style={{ ...fieldStyle, resize: "vertical" }}
        />
      </label>
      <button
        type="submit"
        data-magnetic
        style={{
          border: "none",
          cursor: "pointer",
          marginTop: "6px",
          color: "#fff",
          fontSize: "15px",
          fontWeight: 700,
          padding: "16px",
          borderRadius: "13px",
          background: "linear-gradient(135deg,#4a443d,#1a1815)",
          boxShadow: "0 14px 32px -12px rgba(26,24,21,0.6)",
          willChange: "transform",
          fontFamily: "inherit",
        }}
      >
        送信する →
      </button>
    </form>
  );
}
