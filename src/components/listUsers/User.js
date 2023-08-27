

export default function User ({ID,FirstName,Email}) {
    return (
        <section className="flex gap-3 border rounded-xl p-3 border-solid border-slate-800">
            <div className="id">
                <h2>{ID}</h2>
            </div>
            <div className="name">
                <h2>{FirstName} </h2>
            </div>
            <div className="email">
                <h2 className="text-slate-700 ">{Email}</h2>
            </div>
        </section>
    );
}