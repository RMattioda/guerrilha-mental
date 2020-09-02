import React from 'react';
import PageDefault from '../../components/PageDefault/pageDefault';
import Section from '../../components/section/section';
import TitleContent from '../../components/title/titleContent';
import Paragraph from '../../components/paragraph/paragraph';

const Podcast = () => (
  <>
    <PageDefault>
      <Section principal>
          <TitleContent>Podcasts</TitleContent>

      </Section>

      <Section>
          <TitleContent>Pesquisa</TitleContent>

          <Paragraph>
            Use um filtro para pesquisar seu podcast preferido
          </Paragraph>
      </Section>          
    </PageDefault>
  </>
);

export default Podcast;