import './AProposDeNous.css'

const AProposDeNous = () => {
    return ( 
        <div className="aproposdenous" style={{marginBottom: '13rem'}}>
             <div className="headhead">
                <div className="container">
                    <div className="row">
                        <h2>À PROPOS DE NOUS</h2>
                    </div>
                </div>
            </div>
            <div className="container" style={{paddingTop: '4rem'}}>
                <div className="row border-bottom pb-5 mb-5">
                        <div className="col-md-6 col-12">
                            <div className="">
                                <h4>Nous recherchons toujours une approche spécifique à chaque cas et apportons des solutions complètes.</h4>
                                <p>Notre cabinet est composé d’experts juridique, de conseillers, de médiateurs, d’arbitres et de formateurs de haut niveau spécialisés en droit et fiscalité des affaires, et ce afin de vous accompagner avec efficience et déterminer les solutions les plus appropriées à votre situation.<br/>
                                <br/>
                                Notre objectif est de garantir un service personnalisé, adhoc, sur-mesure et transverse pour répondre à vos besoins et vous accompagner dans vos problématiques business les plus diversifiées et pouvoir vous proposer, par conséquent,  des solutions fiables, rapides et efficaces grâce à notre maitrise des risques des différents secteurs d’activités ainsi que leur challenge au quotidien (industrie, immobilier, transport, ingénierie….).

                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="ImgC">
                                <img src={require('../images/[Downloader.la]-64fa054a6a07d.jpg')} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="ImgC">
                                <img src={require('../images/groupe-personnes-preparant-plan-affaires-dans-bureau.jpg')} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 mt-4">
                            <span style={{fontWeight: '700'}}>Pourquoi nous choisir ?</span>
                            <p>Nous  plaçons vos intérêts au centre de nos préoccupations, grâce à notre vision de legal business partner,  nous vous offrons  des solutions pratiques et efficaces adaptées aux besoins de votre entreprise et conforme aux différentes dispositions légales et réglementaires.</p>
                            <p className='important'>Nous  plaçons vos intérêts au centre de nos préoccupations, grâce à notre vision de legal business partner,  nous vous offrons  des solutions pratiques et efficaces adaptées aux besoins de votre entreprise et conforme aux différentes dispositions légales et réglementaires.</p>
                </div>
                </div>
            </div>
            {/* <div className="container">
                <div className="row">
                       <div className="col-lg-4 col-md-6 col-12 mb-4">
                        <div className="border text-center pb-3">
                            <div className="ImgCS">
                                <img src={require('../images/image-2-b.jpg')} alt="" />
                            </div>
                            <h4>Notre mission</h4>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium iste provident placeat ratione excepturi, 
                            </span>
                        </div>
                        </div> 
                       <div className="col-lg-4 col-md-6 col-12 mb-4">
                        <div className="border text-center pb-3">
                            <div className="ImgCS">
                                <img src={require('../images/image-2-b.jpg')} alt="" />
                            </div>
                            <h4>Notre vision</h4>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium iste provident placeat ratione excepturi, 
                            </span>
                        </div>
                        </div> 
                        <div className="col-lg-4 col-md-6 col-12 mb-4">
                        <div className="border text-center pb-3">
                            <div className="ImgCS">
                                <img src={require('../images/image-2-b.jpg')} alt="" />
                            </div>
                            <h4>Valuers en Direct</h4>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium iste provident placeat ratione excepturi, 
                            </span>
                        </div>
                        </div> 
                        <div className="col-lg-4 col-md-6 col-12 mb-4">
                        <div className="border text-center pb-3">
                            <div className="ImgCS">
                                <img src={require('../images/image-2-b.jpg')} alt="" />
                            </div>
                            <h4>Notre mission</h4>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium iste provident placeat ratione excepturi, 
                            </span>
                        </div>
                        </div> 
                </div>
            </div> */}
        </div>
     );
}
 
export default AProposDeNous;