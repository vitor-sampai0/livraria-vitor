import styles from "./featured.module.css";
import Card from "../card/card";

const Featured = () => {
  return (
    <section className={styles.bookSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionHeading}>Destaques da Semana</h2>
        <a href="/destaques" className={styles.viewAll}>
          Ver todos
        </a>
      </div>

      <div className={styles.container}>

        <Card
          title={"O Algoritmo da Imaginação"}
          author={"Ana Luz Santos"}
          price={49.9}
          coverImage={
            "https://via.placeholder.com/150x200/3498db/ffffff?text=Algoritmo"
          }
          rating={4.5}
          tags={["Ficção Científica ", "Tecnologia"]}
        />
        <Card
          title={"Conexões Invisíveis"}
          author={"Marcos Silva"}
          price={39.9}
          coverImage={
            "https://via.placeholder.com/150x200/e74c3c/ffffff?text=Conexões"
          }
          rating={4.8}
          tags={["Romance ", "Tecnologia"]}
        />
        <Card
          title={"Além do Código"}
          author={"Julia Mendes"}
          price={55.9}
          coverImage={
            "https://via.placeholder.com/150x200/2ecc71/ffffff?text=Código"
          }
          rating={4.7}
          tags={["Biografia ", "Programação"]}
        />
        <Card
          title={"Universos Paralelos"}
          author={"Lucas Costa"}
          price={47.9}
          coverImage={
            "https://via.placeholder.com/150x200/f39c12/ffffff?text=Universos"
          }
          rating={4.7}
          tags={["Ficção Científica ", "Filosofia"]}
        />
      </div>
    </section>
  );
};

export default Featured;
