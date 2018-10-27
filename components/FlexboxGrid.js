import 'flexboxgrid/css/flexboxgrid.min.css';

export default ({ children }) => (
    <section className="row">
        <div className="col-xs-12 col-sm-1 col-md-2">
            <div className="box-row"></div>
        </div>
        <div className="col-xs-12 col-sm-10 col-md-8">
            <div className="box">
                {children}
            </div>
        </div>
        <div className="col-xs-12 col-sm-1 col-md-2">
            <div className="box-row"></div>
        </div>
        <style jsx>{`
            row: {
                margin: 0,
            },
        `}</style>
    </section>
)