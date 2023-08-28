
export default function User({ ID, FirstName, Email }) {
    return (
        <section className="flex gap-3 border justify-between rounded-xl p-3 border-solid border-slate-800">
            <div className="id">
                <h2>{ID}</h2>
            </div>
            <div className="fistname">
                <h2>{FirstName} </h2>
            </div>
            <div className="email">
                <a className="text-lg text-gray-700" href={`mailto: ${Email}`} ><box-icon name='envelope' color='#57708b' ></box-icon></a>
            </div>
        </section>
    );
}