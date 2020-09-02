import React from 'react';
import PageDefault from '../../components/PageDefault/pageDefault';
import {PodcastWrapper} from '../../components/wrappers/podcastWrapper'
import Section from '../../components/section/section';
import TitleContent from '../../components/title/titleContent';
import Paragraph from '../../components/paragraph/paragraph';

const Podcast = () => (
  <>
    <PageDefault>
      <PodcastWrapper>
        <Section principal>
            <TitleContent>Podcasts</TitleContent>


            <div>
              oi
            </div>
        </Section>
        
        <Section>
            <TitleContent>Pesquisa</TitleContent>

            <Paragraph>
              Use um filtro para pesquisar seu podcast preferido
            </Paragraph>
        </Section>      
      </PodcastWrapper> 
    </PageDefault>
  </>
);

export default Podcast;