import { useEffect, useState } from "react";
import axios from 'axios';
// import User from "../../components/listUsers/User";
import TableOne from "../../components/TableOne/TableOne";
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';

export default function Admin() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://mecadom.electroniqueclasse.com/api/users')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, []);

    if (!data) {
        return (
            <main className="flex flex-col items-center justify-center min-h-screen">
                <div className="list flex flex-col gap-3">
                    Chargement...
                </div>
            </main>
        );
    }
    return (
        <main className="flex flex-col w-full items-center justify-center min-h-screen pt-20">

            <Tabs.Group
                aria-label="Default tabs"
                style="default"
            >
                <Tabs.Item
                    active
                    icon={HiUserCircle}
                    title="Users"
                >
                    <TableOne data={data} />


                </Tabs.Item>

                <Tabs.Item
                    icon={MdDashboard}
                    title="Dashboard"
                >
                    <TableOne data={data} />

                </Tabs.Item>
                <Tabs.Item
                    icon={HiAdjustments}
                    title="Settings"
                >
                    <div className=" max-w-4xl">
                        This is
                        <span className="font-medium text-gray-800 dark:text-white">
                            Settings tab's associated content
                        </span>
                        .
                        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                        control the content visibility and styling.
                    </div>
                </Tabs.Item>
                <Tabs.Item
                    icon={HiClipboardList}
                    title="Contacts"
                >
                    <p>
                        This is
                        <span className="font-medium text-gray-800 dark:text-white">
                            Contacts tab's associated content
                        </span>
                        .
                        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                        control the content visibility and styling.
                    </p>
                </Tabs.Item>
                <Tabs.Item
                    disabled
                    title="Disabled"
                >
                    <p>
                        Disabled content
                    </p>
                </Tabs.Item>
            </Tabs.Group>
        </main>
    );
}
