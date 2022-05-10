import { useEffect } from "react";
import { ButtonHome, Footer, HeaderDefault } from "../../components";
import "./styles.scss";

const Privacity = () => {

  useEffect(()=>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  },[])


  return (
    <section className="privacity">
        <HeaderDefault/>

        <article className="privacity__desc">
            <h2 className="privacity__desc-title">Politicas <span> de Privacidade </span></h2>

            <div className="privacity__desc-text">
                    <p>
                    SEÇÃO 1 – INFORMAÇÕES GERAIS<br/>
                    A presente Política de Privacidade contém informações sobre coleta, uso, armazenamento, tratamento e proteção dos dados pessoais dos usuários e visitantes dos cursos oferecidos pela WEBHOJE INTERNET LTDA, com a finalidade de demonstrar absoluta transparência quanto ao assunto e esclarecer a todos interessados sobre os tipos de dados que são coletados, os motivos da coleta e a forma como os usuários podem gerenciar ou excluir as suas informações pessoais.
                    Esta Política de Privacidade aplica-se a todos os usuários e visitantes dos cursos disponibilizados pela WEBHOJE INTERNET LTDAe integra os Termos e Condições Gerais de Uso dos cursos, devidamente inscrita no CNPJ sob o nº 20.293.416/0001-52, situada na Rua Luzia Brunholi Meidas, nº 349, Jardim São Sebastião, Presidente Prudente – SP, CEP: 19.025-833, doravante nominadaWEBHOJE INTERNET.
                    O presente documento foi elaborado em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei 13.709/18), o Marco Civil da Internet (Lei 12.965/14) (e o Regulamento da UE n. 2016/6790). Ainda, o documento poderá ser atualizado em decorrência de eventual atualização normativa, razão pela qual se convida o usuário a consultar periodicamente esta seção.
                    </p>

                    <p>
                    SEÇÃO 2 – COMO RECOLHEMOS OS DADOS PESSOAIS DO USUÁRIO E DO VISITANTE?<br/>
                    Quando o usuário cria uma conta/perfil na plataforma: esses dados são os dados de identificação básicos, como (exemplo: e-mail, nome completo, cidade de residência e profissão). A partir deles, podemos identificar o usuário e o visitante, além de garantir uma maior segurança e bem-estar às suas necessidades. Ficam cientes os usuários e visitantes de que seu perfil na plataforma estará acessível a todos demais usuários e visitantes da plataforma.
                    Quando um usuário e visitante acessa páginas do site ou seus cursos já adquiridos: As informações sobre interação e acesso são coletadas pela empresa para garantir uma melhor experiência ao usuário e visitante. Estes dados podem tratar sobre as palavras-chaves utilizadas em uma busca, o compartilhamento de um documento específico, comentários, visualizações de páginas, perfis, a URL de onde o usuário e visitante provêm, o navegador que utilizam e seus IPs de acesso, dentre outras que poderão ser armazenadas e retidas.
                    Por intermédio de terceiro: a plataforma recebe dados de terceiros, como Facebook, Google, entre outros, quando um usuário faz login com o seu perfil de um desses sites. A utilização desses dados é autorizada previamente pelos usuários junto ao terceiro em questão.
                    </p>

                    <p>
                    SEÇÃO 3 – QUAIS DADOS PESSOAIS RECOLHEMOS SOBRE O USUÁRIO E VISITANTE?<br/>
                    Dados para a criação da conta/perfil na plataforma dos cursos da WebHoje Internet: e-mail, nome completo, cidade de residência e profissão).
                    Dados para otimização da navegação: Acesso a páginas, palavras-chave utilizadas na busca, recomendações, comentários, interação com outros perfis e usuários, perfis seguidos, endereço de IP).
                    Dados para concretizar transações: Dados referentes ao pagamento e transações, tais como, número do cartão de crédito e outras informações sobre o cartão, além dos pagamentos efetuados.
                    Newsletter: O e-mail cadastrado pelo visitante que optar por se inscrever na Newsletter será coletado e armazenado até que o usuário solicite o descadastro.
                    Dados relacionados a contratos: Diante da formalização do contrato de compra e venda ou de prestação de serviços entre a plataforma e o usuário e visitantes, poderão ser coletados e armazenados dados relativos a execução contratual, inclusive as comunicações realizadas entre a empresa e o usuário.
                    </p>

                    <p>
                    SEÇÃO 3 – PARA QUE FINALIDADES UTILIZAMOS OS DADOS PESSOAIS DO USUÁRIO E VISITANTE?<br/>
                    Os dados pessoais do usuário e do visitante coletados e armazenados pela plataforma dos cursos da WebHoje Internet tem por finalidade:
                    Bem-estar do usuário e visitante: Aprimorar o produto e/ou serviço oferecido, facilitar, agilizar e cumprir os compromissos estabelecidos entre o usuário e a empresa, melhorar a experiência dos usuários e fornecer funcionalidades específicas a depender das características básicas do usuário.
                    Melhorias da plataforma: Compreender como o usuário utiliza os serviços da plataforma, para ajudar no desenvolvimento de negócios e técnicas.
                    Anúncios: Apresentar anúncios personalizados para o usuário com base nos dados fornecidos.
                    Comercial: Os dados são usados para personalizar o conteúdo oferecido e gerar subsídio à plataforma para a melhora da qualidade no funcionamento dos serviços.
                    Previsão do perfil do usuário: Tratamento automatizados de dados pessoais para avaliar o uso na plataforma.
                    Dados de cadastro: Para permitir o acesso do usuário a determinados conteúdos da plataforma, exclusivo para usuários cadastrados
                    Dados de contrato: Conferir às partes segurança jurídica e facilitar a conclusão do negócio.
                    O tratamento de dados pessoais para finalidades não previstas nesta Política de Privacidade somente ocorrerá mediante comunicação prévia ao usuário, de modo que os direitos e obrigações aqui previstos permanecem aplicáveis.
                    </p>

                    <p>
                    SEÇÃO 4 – POR QUANTO TEMPO OS DADOS PESSOAIS FICAM ARMAZENADOS?<br/>
                    Os dados pessoais do usuário e visitante são armazenados pela plataforma durante o período necessário para a prestação do serviço ou o cumprimento das finalidades previstas no presente documento, conforme o disposto no inciso I do artigo 15 da Lei 13.709/18.
                    Os dados podem ser removidos ou anonimizados a pedido do usuário, excetuando os casos em que a lei oferecer outro tratamento.
                    Ainda, os dados pessoais dos usuários apenas podem ser conservados após o término de seu tratamento nas seguintes hipóteses previstas no artigo 16 da referida lei:
                    I – Cumprimento de obrigação legal ou regulatória pelo controlador;
                    II – Estudo por órgão de pesquisa, garantida, sempre que possível, a anonimização dos dados pessoais;
                    III – Transferência a terceiro, desde que respeitados os requisitos de tratamento de dados dispostos nesta Lei;
                    IV – Uso exclusivo do controlador, vedado seu acesso por terceiro, e desde que anonimizados os dados.
                    </p>

                    <p>
                    SEÇÃO 5 – SEGURANÇA DOS DADOS PESSOAIS ARMAZENADOS<br/>
                    A plataforma se compromete a aplicar as medidas técnicas e organizativas aptas a proteger os dados pessoais de acessos não autorizados e de situações de destruição, perda, alteração, comunicação ou difusão de tais dados.
                    Os dados relativos ao pagamento ficam armazenados na plataforma em que o pagamento será realizado, devendo-se assim mediante qualquer situação consultar os termos de uso desta plataforma em si.
                    A plataforma não se exime de responsabilidade por culpa exclusiva de terceiros, como em caso de ataque de hackers ou crackers, ou culpa exclusiva do usuário, como no caso em que ele mesmo transfere seus dados a terceiros. O site se compromete a comunicar o usuário em caso de alguma violação de segurança dos seus dados pessoais.
                    Os dados pessoais armazenados são tratados com confidencialidade, dentro dos limites legais. No entanto, podemos divulgar suas informações pessoais caso sejamos obrigados pela lei para fazê-lo ou se você violar nossos Termos de Serviço.
                    SEÇÃO 6 – COMPARTILHAMENTO DOS DADOS
                    O compartilhamento de dados do usuário ocorre apenas com os dados referentes a publicações realizadas pelo próprio usuário, tais ações são compartilhadas publicamente com os outros usuários.
                    Os dados do perfil do usuário são compartilhados publicamente em sistemas de busca e dentro da plataforma, sendo permitido ao usuário modificar tal configuração para que seu perfil não apareça nos resultados de busca de tais ferramentas.
                    </p>

                    <p>
                    SEÇÃO 7 – OS DADOS PESSOAIS ARMAZENADOS SERÃO TRANSFERIDOS A TERCEIROS?<br/>
                    Os terceiros indicados recebem os dados na medida do necessário para permitir que eles realizem os serviços contratados.
                    Com relação aos fornecedores de serviços terceirizados como processadores de transação de pagamento, informamos que cada qual tem sua própria política de privacidade. Desse modo, recomendamos a leitura das suas políticas de privacidade para compreensão de quais informações pessoais serão usadas por esses fornecedores.
                    Os fornecedores podem ser localizados ou possuir instalações localizadas em países diferentes. Nessas condições, os dados pessoais transferidos podem se sujeitar às leis de jurisdições nas quais o fornecedor de serviço ou suas instalações estão localizados.
                    Ao acessar nossos serviços e prover suas informações, você está consentindo o processamento, transferência e armazenamento desta informação em outros países.
                    Ao ser redirecionado para um aplicativo ou site de terceiros, você não será mais regido por essa Política de Privacidade ou pelos Termos de Serviço da nossa plataforma. Não somos responsáveis pelas práticas de privacidade de outros sites e lhe incentivamos a ler as declarações de privacidade deles.
                    </p>

                    <p>
                    SEÇÃO 8 – COOKIES OU DADOS DE NAVEGAÇÃO<br/>
                    Os cookies referem-se a arquivos de texto enviados pela plataforma ao computador do usuário e visitante e que nele ficam armazenados, com informações relacionadas à navegação no site. Tais informações são relacionadas aos dados de acesso como local e horário de acesso e são armazenadas pelo navegador do usuário e visitante para que o servidor da plataforma possa lê-las posteriormente a fim de personalizar os serviços da plataforma.
                    O usuário e o visitante da plataforma em que se localizam os cursos da WebHoje Internet manifesta conhecer e aceitar que pode ser utilizado um sistema de coleta de dados de navegação mediante à utilização de cookies.
                    O cookie persistente permanece no disco rígido do usuário e visitante depois que o navegador é fechado e será usado pelo navegador em visitas subsequentes ao site. Os cookies persistentes podem ser removidos seguindo as instruções do seu navegador. Já o cookie de sessão é temporário e desaparece depois que o navegador é fechado. É possível redefinir seu navegador da web para recusar todos os cookies, porém alguns recursos da plataforma podem não funcionar corretamente se a capacidade de aceitar cookies estiver desabilitada.
                    </p>

                    <p>
                    SEÇÃO 9 – CONSENTIMENTO<br/>
                    Ao utilizar os serviços e fornecer as informações pessoais na plataforma, o usuário está consentindo com a presente Política de Privacidade.
                    O usuário, ao cadastrar-se, manifesta conhecer e pode exercitar seus direitos de cancelar seu cadastro, acessar e atualizar seus dados pessoais e garante a veracidade das informações por ele disponibilizadas.
                    O usuário tem direito de retirar o seu consentimento a qualquer tempo, para tanto deve entrar em contato através do e-mail contato@webhoje.com .
                    </p>

                    <p>
                    SEÇÃO 10 – ALTERAÇÕES PARA ESSA POLÍTICA DE PRIVACIDADE<br/>
                    Reservamos o direito de modificar essa Política de Privacidade a qualquer momento, então, é recomendável que o usuário e visitante revise-a com frequência.
                    As alterações e esclarecimentos vão surtir efeito imediatamente após sua publicação na plataforma. Quando realizadas alterações os usuários serão notificados. Ao utilizar o serviço ou fornecer informações pessoais após eventuais modificações, o usuário e visitante demonstra sua concordância com as novas normas.
                    Diante da fusão ou venda da plataforma à outra empresa os dados dos usuários podem ser transferidos para os novos proprietários para que a permanência dos serviços oferecidos.
                    </p>

                    <p>
                    SEÇÃO 11 – JURISDIÇÃO PARA RESOLUÇÃO DE CONFLITOS<br/>
                    Para a solução de controvérsias decorrentes do presente instrumento será aplicado integralmente o Direito brasileiro.
                    Os eventuais litígios deverão ser apresentados no foro da comarca em que se encontra a sede da empresa.
                    </p>
            </div>
        </article>
        <ButtonHome/>
        <Footer/>
    </section>
  )
}

export default Privacity