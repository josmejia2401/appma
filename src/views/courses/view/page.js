import * as React from 'react';
import "./styles.css";
import banner1 from '../../../assets/banner/banner1.png';

class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.defaultState();

        this.defaultState = this.defaultState.bind(this);
        this.validateInputs = this.validateInputs.bind(this);
        this.setChangeInputEvent = this.setChangeInputEvent.bind(this);
        this.propagateState = this.propagateState.bind(this);
        this.updateState = this.updateState.bind(this);
        this.loadData = this.loadData.bind(this);
        this.loadMoreData = this.loadMoreData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount() {
        this.loadData();
    }

    componentWillUnmount() {
        this.resetData();
    }

    defaultState() {
        return {
            loading: false,
            data: [],
            lastEvaluatedKey: undefined,
        };
    }

    resetData(override = {}) {
        this.updateState({
            ...this.defaultState(),
            ...override
        });
    }

    loadData(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.updateState({ loading: true });
    }

    loadMoreData(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.updateState({ loading: true });
    }

    validateInputs(key) {
        let isValid = true;
        return isValid;
    }

    async setChangeInputEvent(key, event) {
        const { data } = this.state;
        data[key].value = event.target.value;
        this.updateState({ data: data });
        this.validateInputs(key);
    }

    propagateState() { }

    updateState(payload) {
        this.setState({ ...payload }, () => this.propagateState());
    }

    handleSubmit(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    render() {
        return (
            <div>
                <section className="slider-area">
                    <div className="container align-items-center">
                        <div className="row">
                            <div className="col-xl-6 col-lg-7 col-md-12">
                                <div className="banner-slider">
                                    <h1 className='banner-title'>Plataforma<br /> para servicios terapéuticos y refuerzos acádemicos</h1>
                                    <p className='banner-subtitle'>Refuerzos escolares: Su objetivo es complementar y mejorar el rendimiento académico en el aula.</p>
                                    <p className='banner-subtitle'>Terapias: Se enfocan en la evaluación y tratamiento de diversos aspectos de la comunicación humana, que incluyen la comunicación, el lenguaje, habla, la voz, la audición y la deglución/alimentación.</p>
                                    <button type="button" className="btn btn-lg button-secondary banner-button">Unirme</button>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7 col-md-12">
                                <div className="banner-phone-image"> <img src={banner1} /> </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="services-area">
                    <div className="container">
                        <div className="row justify-content-sm-center">
                            <div className="col-lg-4 col-md-6 col-sm-8">
                                <div className="single-services mb-30">
                                    <div className="features-icon">
                                        <img src="assets/img/icon/icon1.svg" alt="" />
                                    </div>
                                    <div className="features-caption">
                                        <h3>60+ UX courses</h3>
                                        <p>The automated process all your website tasks.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-8">
                                <div className="single-services mb-30">
                                    <div className="features-icon">
                                        <img src="assets/img/icon/icon2.svg" alt="" />
                                    </div>
                                    <div className="features-caption">
                                        <h3>Expert instructors</h3>
                                        <p>The automated process all your website tasks.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-8">
                                <div className="single-services mb-30">
                                    <div className="features-icon">
                                        <img src="assets/img/icon/icon3.svg" alt="" />
                                    </div>
                                    <div className="features-caption">
                                        <h3>Life time access</h3>
                                        <p>The automated process all your website tasks.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Page;