import React from 'react';
import PageDefault from '../../components/PageDefault/pageDefault';
import Section from '../../components/section/section';
import TitleContent from '../../components/title/titleContent';
import Paragraph from '../../components/paragraph/paragraph';

const Sobre = () => (
  <>
    <PageDefault>
        <Section principal>
            <TitleContent>Quem somos</TitleContent>
           
            <Paragraph>
                A guerrilha teve seu início em uma conversa amistosa onde dois dos hosts
                (Rodrigo e Teta) discutiam
                sobre alguns temas culturais e como poderiam transmitir essas ideias para mais pessoas.
                Juntos com essa ideia ambos foram atrás de alguém que poderia estar interessado (alemão),
                com sua confirmação todos os 3 se reuniram em seu discord para um programa de teste.
            </Paragraph>

            <Paragraph>
            </Paragraph>
            
        </Section>

        <Section>
            <TitleContent>Hosts</TitleContent>
        </Section>
    </PageDefault>
  </>
);

export default Sobre;