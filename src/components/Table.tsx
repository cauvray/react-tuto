const Table = () => {
    return (
        <div className="shadow-md">
            <table className="w-full text-left text-sm text-gray-500">
                <thead className="bg-blue-100 text-xs uppercase text-gray-700">
                    <tr>
                        <th className="px-6 py-3">FirtName</th>
                        <th className="px-6 py-3">LastName</th>
                        <th className="px-6 py-3">Age</th>
                        <th className="px-6 py-3">Email</th>
                        <th className="px-6 py-3">Gender</th>
                        <th className="px-6 py-3">Is active</th>
                        <th className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                        <th className="px-6 py-3">
                            <span className="sr-only">Delete</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* 1) Afficher la liste des users */}
                    {/* 2) Ajouter sur chaque ligne un boutton Edit */}
                    {/* 3) Ajouter sur chaque ligne un boutton Delete SI l'attribut de l'utilisateur isActive est ) true */}
                    {/* 4) Style : Si l'utilsateur est une femme, afficher le genre en violet, si c'est un homme, afficher le genre en vert */}
                </tbody>
            </table>
        </div>
    )
}
export default Table
