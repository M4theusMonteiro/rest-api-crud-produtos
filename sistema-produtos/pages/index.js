import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Button, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Heading>Supermercado Passa Nós</Heading> <br></br>
      <Button colorScheme="teal" size="lg">
        <Link href="/listagem">Listagem</Link>
      </Button>

      <Button mt={50} colorScheme="teal" size="lg">
        <Link href="/cadastro">Cadastro</Link>
      </Button>
    </div>
  );
}
