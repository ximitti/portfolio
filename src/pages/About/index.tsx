// styles
import { Container } from './styles';

// -------------------------------
const About = () => {
	return (
		<Container>
			<div className='sobre'>
				<h1>Sobre mim</h1>
				<h3>Bem vindo ao meu portfólio</h3>
				<div>
					<p>
						Meu nome é Alex Schmitt, trabalho com desenvolvimento
						desde 2008.
					</p>
					<p>
						Iniciei na área de desenvolvimento com ABAP, toda minha
						experiência foi trabalhando com SAP para Accenture do
						Brasil onde atendi diversos clientes.
					</p>
					<p>
						Depois desses senti a necessidade de mudar e acabei
						conhecendo todo um novo mundo dentro da tecnologia (pelo
						menos para quem ficou imerso no mundo do SAP), trazendo
						essa experiência anterior e a motivação de um iniciante
						para esse mundo de desenvolvimento para web.
					</p>
				</div>
			</div>
			<div className='curriculum'>
				<div className='educacao'>
					<h3>Educação</h3>
					<div>
						<ul>
							<li>
								<span></span>
								<h6>2020 - 2021</h6>

								<h4>Kenzie Academy Brasil</h4>

								<p>
									Desenvolvimento Full Stack, Engenharia de
									Software.
								</p>

								<p>
									Curso de 2.000 horas de desenvolvimento Full
									Stack que abrange tecnologia Front End e
									Back End, além de desenvolvimento de soft
									skills necessários para o mercado de
									trabalho. Entre as linguagens e tecnologias
									aprendidas estão HTML5, CSS3,
									JavaScript(ES6+), React, Redux, Python
									(Django e Flask) e SQL.
								</p>
							</li>
							<li>
								<span></span>
								<h6>2010 - 2011</h6>

								<h4>Uninter - Incompleto</h4>

								<p>
									Graduação em análise e desenvolvimento de
									sistemas
								</p>
							</li>
						</ul>
					</div>
				</div>

				<div className='experiencia'>
					<h3>Experiência</h3>
					<div>
						<ul>
							<li>
								<span></span>
								<h6>2020 - 2021</h6>

								<h4>Peer Coach - Kenzie Academy Brasil</h4>

								<p>
									Acompanhamento e auxilio diário no processo
									de formação dos alunos do primeiro e segundo
									trimestre.
								</p>

								<p>
									Orientação prática nas dúvidas em
									avaliações, projetos e atividades nas
									tecnologias de JavaScript, HTML, CSS e GIT.
								</p>

								<p>
									Orientação prática nas dúvidas em
									avaliações, projetos e atividades nas
									tecnologias de React, Redux, Context API.
								</p>

								<p>Correções de avaliações e atividades.</p>
							</li>
							<li>
								<span></span>
								<h6>2007 - 2019</h6>

								<h4>
									Analista Programador - Accenture do Brasil
								</h4>

								<p>
									Desenvolvimento de diversos produtos e
									adaptações para o sistema SAP, usando a
									linguagem ABAP.
								</p>
							</li>
						</ul>
					</div>
				</div>

				<div className='cursos'>
					<h3>Cursos</h3>
					<div>
						<ul>
							<li>
								<span></span>
								<h6>2020 - 2021</h6>

								<h4>
									Front-End Developer - Kenzie Academy Brasil
								</h4>

								<p>
									Linguagens e tecnologias aprendidas estão
									HTML5, CSS3, JavaScript(ES6+), React, Redux,
									Context API.
								</p>

								<p>
									Além das bibliotecas de rotas
									(react-router-dom), estilização
									(styled-components), formulários
									(react-hook-form, yup) e middlewares para
									Redux (thunk).
								</p>
							</li>
							<li>
								<span></span>
								<h6>2016 - 2016</h6>

								<h4>
									SAP Certified Developement Associate - ABAP
									7.40
								</h4>

								<p>
									Academia de SAP pela Accenture do Brasil e
									posteriormente aprovado na certificação da
									linguagem.
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default About;
