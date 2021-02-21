import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Header from '../../layout/header';
import Footer from '../../layout/footer';
import { APIURL } from '../../../env';
import { connect } from 'react-redux';
import { getProducts } from './actions';
import './style.scss'
class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...props
    }
  }

  componentDidMount() {
    this.props.getProducts()
  }

  productsParam(data) {
    this.setState({ ...this.state, productParam: { ...this.state.productParam, ...data} },()=>{
      console.log({ ...this.state.productParam, ...data})
      this.props.getProducts({ ...this.state.productParam, ...data})
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/img/banner1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/img/banner1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/img/banner1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
        <section class="categories">
          <div class="container">
            <h3 class="common-head">
              Shop By Categories
            </h3>
            <p>Great deals on popular items</p>
            <div class="row">
              <div class="col-sm-2">
                <div class="outer-categories car">
                  <svg xmlns="http://www.w3.org/2000/svg" width="101.347" height="40.543" viewBox="0 0 101.347 40.543">
                    <g id="surface1" transform="translate(0 -0.492)">
                      <path id="Path_13" data-name="Path 13" d="M240,86.891h6.756v3.379H240Zm0,0" transform="translate(-197.772 -71.197)" fill="#cb4154"></path>
                      <path id="Path_14" data-name="Path 14" d="M99.9,10.643,88.424,9a57.908,57.908,0,0,0-6.5-3.445A56.882,56.882,0,0,0,58.389.492H56.4A57.416,57.416,0,0,0,28.98,7.483L23.19,10.642A39.911,39.911,0,0,0,3.875,15.878,7.711,7.711,0,0,0,0,22.555v10.03a1.689,1.689,0,0,0,1.689,1.689H7.361a10.1,10.1,0,0,0,19.058,0H71.548a10.1,10.1,0,0,0,19.058,0h.606a1.7,1.7,0,0,0,.628-.12l5.471-2.2A6.388,6.388,0,0,0,101.347,26V12.316A1.69,1.69,0,0,0,99.9,10.643Zm-76.387,21.6a6.757,6.757,0,1,1,.137-1.351A6.756,6.756,0,0,1,23.511,32.248ZM54.052,30.9H27.026a10.135,10.135,0,1,0-20.269,0H3.378V22.555a4.321,4.321,0,0,1,2.174-3.745,36.52,36.52,0,0,1,18.1-4.806h30.4Zm0-20.269H30.272l.326-.178a54.009,54.009,0,0,1,23.454-6.5ZM57.43,3.87h.956A53.46,53.46,0,0,1,78.26,7.678l-2.949,2.949H57.43ZM87.7,32.248a6.757,6.757,0,1,1,.137-1.351A6.757,6.757,0,0,1,87.7,32.248ZM97.969,15.694H92.9v3.379h5.068V26a3.023,3.023,0,0,1-1.912,2.822l-4.845,1.946c0-.155-.02-.309-.03-.465s-.014-.337-.03-.507-.051-.338-.078-.507-.047-.338-.081-.491-.083-.324-.127-.485-.078-.322-.129-.48-.111-.307-.168-.461-.11-.312-.169-.465-.139-.29-.21-.434-.14-.3-.219-.446-.169-.269-.245-.4-.168-.289-.265-.427-.186-.248-.279-.373-.2-.272-.306-.4-.209-.232-.314-.338-.221-.249-.337-.368-.232-.212-.348-.316-.242-.228-.37-.338-.258-.194-.386-.29-.257-.2-.392-.289-.287-.168-.432-.263-.264-.169-.4-.241-.307-.149-.463-.223-.277-.14-.421-.2-.338-.125-.507-.186-.279-.109-.423-.154c-.192-.059-.39-.1-.586-.151-.129-.03-.252-.071-.381-.1-.208-.043-.421-.066-.632-.1-.125-.017-.245-.044-.37-.056a10.267,10.267,0,0,0-1.03-.052A10.145,10.145,0,0,0,70.948,30.894H57.43V14H76.01A1.686,1.686,0,0,0,77.2,13.51l4.38-4.38a54.164,54.164,0,0,1,5.355,2.929,1.7,1.7,0,0,0,.655.24L97.969,13.78Zm0,0" fill="#cb4154"></path>
                    </g>
                  </svg>
                  <h3>Cars</h3>
                  <a href="" class="stretched-link"></a>
                </div>
              </div>
              <div class="col-sm-2">
                <div class="outer-categories">
                  <svg xmlns="http://www.w3.org/2000/svg" width="44.333" height="70" viewBox="0 0 44.333 70">
                    <g id="smartphone" transform="translate(-88)">
                      <g id="Group_51" data-name="Group 51" transform="translate(88)">
                        <g id="Group_50" data-name="Group 50" transform="translate(0)">
                          <path id="Path_38" data-name="Path 38" d="M126.5,0H93.833A5.84,5.84,0,0,0,88,5.833V64.167A5.84,5.84,0,0,0,93.833,70H126.5a5.84,5.84,0,0,0,5.833-5.833V5.833A5.84,5.84,0,0,0,126.5,0ZM130,64.167a3.5,3.5,0,0,1-3.5,3.5H93.833a3.5,3.5,0,0,1-3.5-3.5V58.333H130ZM130,56H90.333V9.333H130Zm0-49H90.333V5.833a3.5,3.5,0,0,1,3.5-3.5H126.5a3.5,3.5,0,0,1,3.5,3.5Z" transform="translate(-88)" fill="#cb4154"></path>
                        </g>
                      </g>
                      <g id="Group_53" data-name="Group 53" transform="translate(106.826 59.977)">
                        <g id="Group_52" data-name="Group 52" transform="translate(0)">
                          <path id="Path_39" data-name="Path 39" d="M219.341,408a3.341,3.341,0,1,0,3.341,3.341A3.341,3.341,0,0,0,219.341,408Zm0,4.455a1.114,1.114,0,1,1,1.114-1.114A1.114,1.114,0,0,1,219.341,412.455Z" transform="translate(-216 -408)" fill="#cb4154"></path>
                        </g>
                      </g>
                      <g id="Group_55" data-name="Group 55" transform="translate(107.939 3.341)">
                        <g id="Group_54" data-name="Group 54" transform="translate(0)">
                          <path id="Path_40" data-name="Path 40" d="M227.341,24h-2.227a1.114,1.114,0,1,0,0,2.227h2.227a1.114,1.114,0,1,0,0-2.227Z" transform="translate(-224 -24)" fill="#cb4154"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <h3>Mobiles</h3>
                  <a href="" class="stretched-link"></a>
                </div>
              </div>
              <div class="col-sm-2">
                <div class="outer-categories">
                  <svg xmlns="http://www.w3.org/2000/svg" width="78.527" height="70" viewBox="0 0 78.527 70">
                    <g id="home" transform="translate(0.001 -27.798)">
                      <g id="Group_26" data-name="Group 26" transform="translate(-0.001 27.798)">
                        <g id="Group_25" data-name="Group 25" transform="translate(0 0)">
                          <path id="Path_26" data-name="Path 26" d="M77.691,55.762,40.468,28.2a2.021,2.021,0,0,0-2.41,0L.835,55.762a2.079,2.079,0,0,0-.441,2.884,2.026,2.026,0,0,0,2.852.446L39.263,32.419,75.28,59.092a2.024,2.024,0,0,0,2.851-.446A2.079,2.079,0,0,0,77.691,55.762Z" transform="translate(0.001 -27.798)" fill="#cb4154"></path>
                        </g>
                      </g>
                      <g id="Group_28" data-name="Group 28" transform="translate(8.757 58.758)">
                        <g id="Group_27" data-name="Group 27">
                          <path id="Path_27" data-name="Path 27" d="M115.43,232.543a2.049,2.049,0,0,0-2.034,2.064v32.848H97.127V249.524a10.17,10.17,0,1,0-20.339,0v17.931H60.519V234.607a2.034,2.034,0,1,0-4.067,0v34.912a2.049,2.049,0,0,0,2.034,2.064H78.823a2.045,2.045,0,0,0,2.026-1.9,1.581,1.581,0,0,0,.008-.161V249.524a6.1,6.1,0,1,1,12.2,0v19.995a1.534,1.534,0,0,0,.008.159,2.045,2.045,0,0,0,2.026,1.9h20.337a2.049,2.049,0,0,0,2.034-2.064V234.607A2.049,2.049,0,0,0,115.43,232.543Z" transform="translate(-56.452 -232.543)" fill="#cb4154"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <h3>Houses</h3>
                  <a href="" class="stretched-link"></a>
                </div>
              </div>
              <div class="col-sm-2">
                <div class="outer-categories">
                  <svg xmlns="http://www.w3.org/2000/svg" width="91.057" height="70" viewBox="0 0 91.057 70">
                    <g id="laptop" transform="translate(0 -59.201)">
                      <g id="Group_31" data-name="Group 31" transform="translate(0 59.201)">
                        <g id="Group_30" data-name="Group 30" transform="translate(0 0)">
                          <path id="Path_28" data-name="Path 28" d="M91.053,122.668c0-.013,0-.026,0-.04a1.308,1.308,0,0,0-.023-.155l0-.015a1.293,1.293,0,0,0-.039-.137l-.013-.035a1.279,1.279,0,0,0-.051-.118c0-.007-.005-.014-.009-.02l-7.134-14.071V61.783A2.585,2.585,0,0,0,81.2,59.2H9.86a2.585,2.585,0,0,0-2.582,2.582v46.293L.144,122.147c0,.007-.006.014-.009.02-.019.038-.035.078-.051.118l-.013.035a1.356,1.356,0,0,0-.039.137l0,.014a1.314,1.314,0,0,0-.023.155c0,.013,0,.026,0,.04s0,.055,0,.083v3.384A3.07,3.07,0,0,0,3.067,129.2H87.991a3.07,3.07,0,0,0,3.067-3.067v-3.384C91.057,122.722,91.055,122.7,91.053,122.668ZM9.946,61.869H81.112v45.192H9.946Zm-.515,47.86h72.2l5.925,11.688H58.246l-1.471-5.333a2.519,2.519,0,0,0-2.421-1.844H36.7a2.518,2.518,0,0,0-2.421,1.844l-1.471,5.334H3.506Zm46.048,11.688h-19.9l1.244-4.51H54.235Zm32.911,4.717a.4.4,0,0,1-.4.4H3.067a.4.4,0,0,1-.4-.4v-2.05H88.39Z" transform="translate(0 -59.201)" fill="#cb4154"></path>
                        </g>
                      </g>
                      <g id="Group_33" data-name="Group 33" transform="translate(13.261 86.351)">
                        <g id="Group_32" data-name="Group 32">
                          <path id="Path_29" data-name="Path 29" d="M135.144,213.756a1.35,1.35,0,0,0-1.315,1.383v14.023H74.552V215.139a1.316,1.316,0,1,0-2.629,0v14.62a2.119,2.119,0,0,0,2.062,2.168H134.4a2.119,2.119,0,0,0,2.062-2.168v-14.62A1.35,1.35,0,0,0,135.144,213.756Z" transform="translate(-71.923 -213.756)" fill="#cb4154"></path>
                        </g>
                      </g>
                      <g id="Group_35" data-name="Group 35" transform="translate(13.261 64.917)">
                        <g id="Group_34" data-name="Group 34" transform="translate(0 0)">
                          <path id="Path_30" data-name="Path 30" d="M134.4,90.2H73.985a2.119,2.119,0,0,0-2.062,2.168v14.62a1.316,1.316,0,1,0,2.629,0V92.969H133.83v14.023a1.316,1.316,0,1,0,2.629,0V92.371A2.119,2.119,0,0,0,134.4,90.2Z" transform="translate(-71.923 -90.203)" fill="#cb4154"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <h3>Laptops</h3>
                  <a href="" class="stretched-link"></a>
                </div>
              </div>
              <div class="col-sm-2">
                <div class="outer-categories">
                  <svg xmlns="http://www.w3.org/2000/svg" width="83" height="65.327" viewBox="0 0 83 65.327">
                    <g id="camera" transform="translate(0 -44.8)">
                      <g id="Group_37" data-name="Group 37" transform="translate(0 44.8)">
                        <g id="Group_36" data-name="Group 36" transform="translate(0 0)">
                          <path id="Path_31" data-name="Path 31" d="M80.239,54.978a8.924,8.924,0,0,0-6.548-2.761h-13.1v-.158a7.084,7.084,0,0,0-2.13-5.128,7.219,7.219,0,0,0-5.128-2.13H29.665a7.274,7.274,0,0,0-7.337,7.259v.158H9.31a8.924,8.924,0,0,0-6.548,2.761A9.38,9.38,0,0,0,0,61.526v39.291a8.924,8.924,0,0,0,2.761,6.548,9.38,9.38,0,0,0,6.548,2.761H73.69a8.924,8.924,0,0,0,6.548-2.761A9.38,9.38,0,0,0,83,100.817V61.526A8.924,8.924,0,0,0,80.239,54.978ZM78.9,100.817h-.079a5.118,5.118,0,0,1-5.128,5.128H9.31a5.118,5.118,0,0,1-5.128-5.128V61.526A5.118,5.118,0,0,1,9.31,56.4H24.537a2.121,2.121,0,0,0,2.13-2.13V51.98A2.97,2.97,0,0,1,29.744,48.9h23.59a2.97,2.97,0,0,1,3.077,3.077v2.288a2.121,2.121,0,0,0,2.13,2.13H73.769A5.118,5.118,0,0,1,78.9,61.526Z" transform="translate(0 -44.8)" fill="#cb4154"></path>
                          <path id="Path_32" data-name="Path 32" d="M131.409,130.8a19.395,19.395,0,1,0,13.728,5.681A19.443,19.443,0,0,0,131.409,130.8Zm10.73,30.218a15.239,15.239,0,0,1-21.46,0,15.083,15.083,0,0,1-4.418-10.73,15.418,15.418,0,0,1,4.418-10.73,15.083,15.083,0,0,1,10.73-4.418,15.418,15.418,0,0,1,10.73,4.418,15.083,15.083,0,0,1,4.418,10.73A14.763,14.763,0,0,1,142.139,161.018Z" transform="translate(-89.909 -113.837)" fill="#cb4154"></path>
                          <circle id="Ellipse_5" data-name="Ellipse 5" cx="3.866" cy="3.866" r="3.866" transform="translate(65.721 16.884)" fill="#cb4154"></circle>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <h3>Camera</h3>
                  <a href="" class="stretched-link"></a>
                </div>
              </div>
              <div class="col-sm-2">
                <div class="outer-categories">
                  <svg xmlns="http://www.w3.org/2000/svg" width="104" height="61.734" viewBox="0 0 104 61.734">
                    <g id="bicycle" transform="translate(0 -104.086)">
                      <g id="Group_40" data-name="Group 40" transform="translate(0 104.086)">
                        <g id="Group_39" data-name="Group 39">
                          <path id="Path_33" data-name="Path 33" d="M101.663,135.016A21.106,21.106,0,0,0,76.28,124.643l-8.654-17.308H81.241a1.624,1.624,0,0,1,0,3.249h-6.5a1.624,1.624,0,0,0,0,3.249h6.5a4.873,4.873,0,0,0,0-9.746H65a1.624,1.624,0,0,0-1.462,2.35l2.082,4.147H36.764l-1.624-3.249h8.742a1.624,1.624,0,0,0,0-3.249H27.639a1.624,1.624,0,1,0,0,3.249h3.869l2.436,4.873-6.218,12.435a21.115,21.115,0,1,0,14.448,21.674H52a1.607,1.607,0,0,0,.39-.05l.034-.008c.037-.01.07-.031.107-.042a1.713,1.713,0,0,0,.193-.07c.01,0,.015-.013.023-.018s.045-.023.067-.036a1.633,1.633,0,0,0,.136-.1,1.727,1.727,0,0,0,.2-.162l.063-.065c.024-.028.039-.058.062-.088a1.584,1.584,0,0,0,.107-.132c.013-.023.019-.049.031-.071s.029-.036.041-.057l14.791-29.58,5.035,10.071a21.077,21.077,0,1,0,28.382,9.107ZM21.142,162.56a17.867,17.867,0,1,1,5.115-34.979l-8.193,16.386a1.624,1.624,0,0,0,1.454,2.35H38.926A17.883,17.883,0,0,1,21.142,162.56Zm1-19.491,7.132-14.263a17.878,17.878,0,0,1,9.648,14.263Zm20.029,0A21.115,21.115,0,0,0,30.725,125.9l5.035-10.071,13.615,27.236ZM52,141.061,38.389,113.832H65.618ZM88.03,161.8a17.861,17.861,0,0,1-13.3-33l8.307,16.613a1.625,1.625,0,0,0,2.907-1.452L77.75,127.581A17.867,17.867,0,0,1,88.03,161.8Z" transform="translate(0 -104.086)" fill="#cb4154"></path>
                        </g>
                      </g>
                      <g id="Group_42" data-name="Group 42" transform="translate(17.894 147.941)">
                        <g id="Group_41" data-name="Group 41" transform="translate(0 0)">
                          <path id="Path_34" data-name="Path 34" d="M91.379,320.086H89.754a1.624,1.624,0,1,0,0,3.249h1.624a1.624,1.624,0,1,0,0-3.249Z" transform="translate(-88.13 -320.086)" fill="#cb4154"></path>
                        </g>
                      </g>
                      <g id="Group_44" data-name="Group 44" transform="translate(24.391 147.941)">
                        <g id="Group_43" data-name="Group 43" transform="translate(0 0)">
                          <path id="Path_35" data-name="Path 35" d="M123.379,320.086h-1.624a1.624,1.624,0,1,0,0,3.249h1.624a1.624,1.624,0,1,0,0-3.249Z" transform="translate(-120.13 -320.086)" fill="#cb4154"></path>
                        </g>
                      </g>
                      <g id="Group_46" data-name="Group 46" transform="translate(30.888 147.941)">
                        <g id="Group_45" data-name="Group 45" transform="translate(0 0)">
                          <path id="Path_36" data-name="Path 36" d="M155.379,320.086h-1.624a1.624,1.624,0,1,0,0,3.249h1.624a1.624,1.624,0,1,0,0-3.249Z" transform="translate(-152.13 -320.086)" fill="#cb4154"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <h3>Cycles</h3>
                  <a href="" class="stretched-link"></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="products">
          <div className="container">
            <div className="row padding-div">
              <div className="col-md-12">
              <br />
              <br />
                <div className="row no-gutters">
                  <div className="col-md-12 product-list">
                    {this.props.products?.list && this.props.products?.list.length > 0 ?
                      <>
                        <div className="product-wrap row">
                          {this.props.products?.list.map((product, i) => {
                            return (
                              <div className="product-card col-lg-3 col-md-4 col-sm-6 col-xs-12" key={i}>
                                <Link className="no-border" to={'/product/' + product.id}>
                                  <div className="product-img"><img src={APIURL + JSON.parse(product.images)[0]} className="" /></div>
                                </Link>
                                <figcaption className="product-body">
                                  <h6 className="main-title text-truncate">{product.title}</h6>
                                  <p>{String(product.description).substring(0, 130)}...</p>
                                </figcaption>
                                <div className="btn-wrap">
                                  <Link to={'/product/' + product.id} className="btn main-btn-outline btn-round">View</Link>
                                </div>
                              </div>
                            )
                          })} </div>
                      </> : <div className="alert alert-danger">No Products Found</div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    products: state.productsReducer.products
  };
};

const mapDispatchToProps = (dispatch) => ({
  getProducts: (data) => dispatch(getProducts(data)),
});



export default connect(mapStateToProps, mapDispatchToProps)(Index)