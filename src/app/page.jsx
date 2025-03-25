import styles from "./livraria-vitor.module.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Banner from "./components/banner/banner";
import Featured from "./components/featured/featured";
import Categories from "./components/categories/categories";
import Releases from "./components/releases/releases";
import Subscription from "./components/subscription/subscription";

export default function Home() {
  // Dados que seriam obtidos de uma API
  // Carrinho simulado
  const cartItems = [
    { id: 2, title: "Conexões Invisíveis", quantity: 1, price: 39.9 },
    { id: 5, title: "A Linguagem Secreta", quantity: 1, price: 42.9 },
  ];
  // Função para calcular o total do carrinho
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  return (
    <div className={styles.bookstoreContainer}>
      {/* HEADER */}
      <Header />
      {/* HERO BANNER */}
      <Banner />
      {/* FEATURED BOOKS SECTION */}
      <Featured />
      {/* CATEGORIES SECTION */}
      <Categories />
      {/* NEW RELEASES SECTION */}
      <Releases />
      {/* SUBSCRIPTION SECTION */}
      <Subscription />
      {/* SHOPPING CART */}
      <div className={styles.shoppingCart}>
        <div className={styles.cartHeader}>
          <h3 className={styles.cartHeaderTitle}>Seu Carrinho</h3>
          <button className={styles.closeButton}>✕</button>
        </div>

        <div className={styles.cartItems}>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemInfo}>
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                  <div className={styles.itemDetails}>
                    <span className={styles.itemQuantity}>
                      Qtd: {item.quantity}
                    </span>
                    <span className={styles.itemPrice}>
                      R$ {item.price.toFixed(2)}
                    </span>
                  </div>
                </div>
                <button className={styles.removeButton}>✕</button>
              </div>
            ))
          ) : (
            <p className={styles.emptyCartMessage}>Seu carrinho está vazio</p>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className={styles.cartFooter}>
            <div className={styles.cartTotal}>
              <span className={styles.totalLabel}>Total:</span>
              <span className={styles.totalValue}>
                R$ {calculateTotal().toFixed(2)}
              </span>
            </div>
            <button className={styles.checkoutButton}>Finalizar Compra</button>
          </div>
        )}
      </div>
      {/* FOOTER */}
      <Footer />
      {/* OVERLAY */}
      <div className={styles.overlay}></div>
      {/* SCROLL TO TOP BUTTON */}
      <button className={styles.scrollTop}>↑</button>
    </div>
  );
}
