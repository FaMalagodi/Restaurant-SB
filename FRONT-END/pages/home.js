import Head from 'next/head'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sabor Divino</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header class="max width bg" id="home">
        <div class="container">
            <div class="menu">
                <div class="logo"></div>
                <div class="desktop-menu">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </div>
            </div>
            <div class="call">
                <div class="left">
                    <img src="/imagens/download-removebg-preview (2).png" alt=""/>
                </div>
                <div class="right">
                    <h1 class="color-laranja text-gd">𝕊𝔸𝔹𝕆ℝ 𝔻𝕀𝕍𝕀ℕ𝕆</h1>
                    <h2 class="color-cinza-1 text-md">𝙴𝚡𝚙𝚎𝚛𝚒𝚖𝚎𝚗𝚝𝚎 𝚊 𝚖𝚎𝚕𝚑𝚘𝚛 𝚌𝚘𝚖𝚒𝚍𝚊 𝚍𝚊 𝚛𝚎𝚐𝚒𝚊𝚘</h2>
                    <p class="text-pq">O Restaurante Sabor Divino é um verdadeiro paraíso gastronômico localizado na região,
                         onde os sabores extraordinários se encontram para proporcionar uma experiência culinária inigualável.
                          Com um nome que diz tudo, este estabelecimento é conhecido por oferecer a melhor comida da região, 
                          conquistando os corações e paladares dos moradores locais e visitantes.</p>
                    <button>Ver Menu</button>
                </div>
            </div>
        </div>
        <button id="back-to-top">&#129045;</button>
    </header>

    <section class="max-width bg" id="menu">
    <div class="container">
        <div class="content">
            <div class="titulo">
                <span class="text-md color-laranja">𝕆 ℚ𝕌𝔼 𝕋𝔼𝕄𝕆𝕊 𝔸 𝕆𝔽𝔼ℝ𝔼ℂ𝔼ℝ</span>
                <h2 class="text-gd color-cinza-1">⇩</h2>
            </div>
            <div class="down">
                

                <div class="box">
                    <img src="/imagens/download-removebg-preview.png" alt=""/>
                    <h2 class="color-laranja">Bebidas</h2>
                    <p class="text-md"> Oferece uma experiência refrescante com uma seleção
                     vibrante de sucos naturais. Delicie-se com misturas frescas de 
                     frutas em um ambiente acolhedor e desfrute de uma pausa revigorante.</p>
                    <p> </p>
                </div>

                <div class="box">
                    <img src="/imagens/gallery_9cadb3d1-99af-4caf-82bb-fb294a85c4c8-removebg-preview.png" alt=""/>
                    <h2 class="color-laranja">Lanches</h2>
                    <p class="text-md"> Aqui seu refúgio para lanches rápidos e deliciosos. Desfrute de hambúrgueres
                     suculentos frescos em um ambiente acolhedor e prático.</p>
                    <p></p>
                </div>

                <div class="box">
                    <img src="imagens/images-removebg-preview.png" alt=""/>
                    <h2 class="color-laranja">Sobremesa</h2>
                    <p class="text-md"> O lugar perfeito para satisfazer sua vontade de 
                    sobremesas. Com opções indulgentes, de bolos decadentes a sorvetes 
                    cremosos, cada mordida é uma experiência doce em um ambiente aconchegante.</p>
                    <p> </p>
                </div>
            </div>
            <Link href="/cardapio">
                <button className="btn-conferir">Conferir Cardápio Completo</button>
            </Link>

        </div>
    </div>
</section>


    <section class="max-width bg" id="about">
        <div class="container">
            <div class="call">
                <div class="left">
                    <span class="text-md color-laranja">𝕊𝕆𝔹ℝ𝔼 ℕ𝕆𝕊</span>
                    <h2 class="text-md color-cinza-1">𝙰𝚜 𝚌𝚘𝚖𝚒𝚍𝚊𝚜 𝚖𝚊𝚒𝚜 𝚜𝚊𝚋𝚘𝚛𝚘𝚜𝚊𝚜 𝚜𝚊𝚎𝚖 𝚍𝚘 𝚗𝚘𝚜𝚜𝚘 𝚛𝚎𝚜𝚝𝚊𝚞𝚛𝚊𝚗𝚝𝚎</h2>
                    <p>O Restaurante Sabor Divino é muito mais do que apenas um lugar para refeições,
                         é uma experiência culinária única que reflete a paixão e dedicação de nossa
                          equipe em proporcionar momentos especiais aos nossos clientes. Desde a nossa fundação,
                           buscamos incansavelmente a excelência na gastronomia e no atendimento, 
                           e é por isso que nos orgulhamos de ser reconhecidos como o melhor restaurante da região.</p>
                    <button>Saiba Mais</button>
                </div>
                <div class="right">
                    <img src="/imagens/x-tudo.jpg" alt=""/>
                </div>
            </div>
        </div>
    </section>


    <section class="max-width bg" id="servicos">
        <div class="container">
            <div class="content">
                <div class="titulo">
                    <span class="text-md color-laranja">𝕊𝔼ℝ𝕍𝕀ℂ𝕆𝕊</span>
                    <h2 class="text-gd color-cinza-1">𝙽𝚘𝚜𝚜𝚘𝚜 𝚂𝚎𝚛𝚟𝚒𝚌𝚘𝚜</h2>
                </div>
                <div class="down">
                    <div class="box">
                        <i > <img src="/imagens/ham-removebg-preview.png" alt=""/></i>
                        <h2>A melhor comida</h2>
                        <p>Descubra o sabor que conquistou corações na região.
                            A melhor comida da região está aqui, esperando por você.</p>
                    </div>
                    <div class="box">
                        <i> <img src="/imagens/faca.jpg" alt=""/> </i>
                        <h2>Comida rápida</h2>
                        <p>Desfrute da conveniência da comida rápida.
                            Sabores deliciosos em minutos.
                            Satisfaça sua fome sem espera.</p>
                    </div>
                    <div class="box">
                        <i> <img src="/imagens/moto-removebg-preview.png" alt=""/> </i>
                        <h2>Pronta Entrega</h2>
                        <p>
                            Produtos pronta entrega, para sua comodidade imediata. 
                            Receba o que precisa agora mesmo. 
                            Agilidade e eficiência em cada pedido.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="max-width bg" id="contato">
        <div class="container">
            <div class="call">
                <div class="left">
                    <span class="text-md color-laranja">ℕ𝕆𝕊𝕊𝕆 𝔸ℙ𝕃𝕀ℂ𝔸𝕋𝕀𝕍𝕆</span>
                    <h2 class="text-md color-cinza-1">𝙾 𝚊𝚙𝚕𝚒𝚌𝚊𝚝𝚒𝚟𝚘 𝚓𝚊 𝚎𝚜𝚝𝚊 𝚍𝚒𝚜𝚙𝚘𝚗𝚒𝚟𝚎𝚕</h2><br/>
                    <p>O aplicativo Sabor Divino está agora disponível para todos! 
                        Com esta incrível ferramenta, você terá acesso a uma ampla 
                        variedade de receitas deliciosas e dicas culinárias que vão
                         transformar suas experiências na cozinha. Não perca tempo,
                          faça o download do aplicativo agora e descubra um mundo 
                          de sabores e criatividade culinária ao seu alcance.
                           Deixe o Sabor Divino guiar suas aventuras gastronômicas!</p>
                    <div class="info">
                        <img src="/imagens/pa-removebg-preview.png" alt=""/>
                    </div>
                </div>
                <div class="right">
                    <img src="/imagens/Black_and_White_Phone_Mockup_Webinar_Promotion_Instagram_Story-removebg-preview.png" alt=""/>

                </div>
            </div>
        </div>
    </section>
    <script>

    </script>
    </>
  )
}