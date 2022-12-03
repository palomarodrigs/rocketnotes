import { Container, Links, Content } from "./styles";

import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            possimus temporibus nostrum nesciunt tenetur aliquid, voluptatibus
            labore ea dolore dignissimos! Cumque culpa consequatur fuga minima
            amet tempora temporibus, nostrum aliquid! Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Nemo vel unde corrupti ex,
            harum, illo similique exercitationem fugit necessitatibus, tenetur
            accusamus! Ab eveniet necessitatibus voluptas maiores quo
            accusantium, enim dicta!
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br/</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br/</a>
              </li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
