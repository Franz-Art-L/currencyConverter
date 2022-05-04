class CurrencyConverter extends React.Component{
    constructor() {
        super();

        this.state = {
            rate: 0.95,
            usd: 1,
            euro: 1 * 0.95,
        };

        this.handleEuroChange = this.handleEuroChange.bind(this);
        this.handleUsdChange = this.handleUsdChange.bind(this);
    };

    toUsd(amount, rate) {
        return amount * (1 / rate);
    };

    toEuro(amount, rate) {
        return amount * rate;
    };

    handleUsdChange(event) {
        const euro = this.convert(event.target.value, this.state.rate, this.toEuro);
        this.setState({
            usd: event.target.value,
            euro
        });
    };

    handleEuroChange(event) {
        const usd = this.convert(event.target.value, this.state.rate, this.toUsd);
        this.setState({
            euro: event.target.value,
            usd
        });

    };

    convert(amount, rate, equation) {
        const input = parseFloat(amount);
        if(Number.isNaN(input)) {
            return "";
        }
        return equation(input, rate).toFixed(3);
    };

    render() {
        const {rate, usd, euro} = this.state;

        return(
            <div className="container">
                <div className="text-center p-3 mb-2">
                    <h2 className="mb-2">Currency Converter</h2>
                        <h4>USD 1 : {rate} EURO</h4>
                </div>
                <div className="row text-center">
                    <div className="col-12">
                    
                        <span className="mr-1">USD</span>
                        <CurrencyInput value={usd} handleChange={this.handleUsdChange} />
                    
                        <span className="mx-3"> = </span>
                    
                       
                        <span className="ml-1">EURO</span>
                        <CurrencyInput value={euro} handleChange={this.handleEuroChange} />
                    </div>
                </div>
            </div>
        )
    }
}

class CurrencyInput extends React.Component {
    render() {
        const {value, handleChange} = this.props;

        return <input value={value} onChange={handleChange} type="number" />
    }
}

const Footer = () => {
    return(
        <div className="py-2 my-4 text-center">
             <span>ReactJs practice by:</span>
             <p><a href="https://confident-murdock-8e5bba.netlify.app/" target="_blank" rel="noopener noreferrer">Francis Artemio Landia</a><br />2022</p>
        </div>
    );
  };

ReactDOM.render(<CurrencyConverter/>, document.getElementById('root'));
ReactDOM.render(<Footer/>, document.getElementById('footer'));