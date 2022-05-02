class CurrencyConverter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rate: 0.95,
            usd: 1,
            euro: 1 * 0.95
        }
    };

    toUsd(amount, rate) {
        return amount * (1 / rate);
    };

    toEuro(amount, rate) {
        return amount * rate;
    }

    render() {
        const { rate, usd, euro } = this.state;

        return (
            <div className="container">
                <div className="text-center p-3 mb-2">
                    <h2 className="mb-2">Currency Converter</h2>
                    <h4>USD 1 : {rate} EURO</h4>
                </div>
                <div className="row text-center">
                    <div className="col-12">
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<CurrencyConverter/>, document.getElementById('root'));