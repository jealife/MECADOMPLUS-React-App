import React from 'react'

export default function ProfilTab({data}) {
    return (
        <div>
            <div class="mb-3 pt-0">
                <input type="text" value={data.last_name} placeholder="Small Input" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full" />
            </div>
            <div class="mb-3 pt-0">
                <input type="text" placeholder="Regular Input" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full" />
            </div>
            <div class="mb-3 pt-0">
                <input type="text" placeholder="Large Input" class="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-base border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full" />
            </div>
        </div>
    )
}
