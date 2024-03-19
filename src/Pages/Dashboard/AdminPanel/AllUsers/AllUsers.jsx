import { useQuery } from "@tanstack/react-query";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const AllUsers = () => {
    // const { data: users = [] } = useQuery(['users'], async () => {
    //     const res = await fetch('http://localhost:5000/users');
    //     return res.json();
    // });

    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const url = `/users`;
            const res = await axiosSecure.get(url);
            return res.data;
        }
    })

    const noOfAdmins = users.filter(user => user.role === 'admin');
    const noOfUsers = users.filter(user => user.role !== 'admin');

    const handleMakeAdmin = user => {
        Swal.fire({
            title: "Are you sure?",
            // text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `http://localhost:5000/users/admin/${user._id}`;
                fetch(url, {
                    method: 'PATCH'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount) {
                            refetch();
                            console.log("Admin Updated");
                        }
                    })
            }
        });
    }

    /* const handleDelete = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                delUser(user)
                    .then(() => {
                        const url = `http://localhost:5000/users/${user._id}`;
                        fetch(url, {
                            method: 'DELETE'
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.deletedCount > 0) {
                                    refetch();
                                }
                            })
                        Swal.fire({
                            title: "Deleted!",
                            text: "User has been deleted.",
                            icon: "success"
                        });
                    });
            }
        });
    } */

    return (
        <div>
            <h1 className="text-xl font-bold mt-3 text-center font-serif">All Users</h1>
            <div className="font-bold  flex flex-col lg:flex-row justify-between items-center p-5 mx-5 shadow-lg font-serif rounded-lg">
                <p className="text-xl">Sub Total {users.length < 10 ? `0${users.length}` : `${users.length}`}</p>
                <p className="text-xl">Total Admin(s) {noOfAdmins.length < 10 ? `0${noOfAdmins.length}` : `${noOfAdmins.length}`}</p>
                <p className="text-xl">Total User(s) {noOfUsers.length < 10 ? `0${noOfUsers.length}` : `${noOfUsers.length}`}</p>
            </div>
            <div>
                <div className="overflow-x-auto mx-5 p-5 shadow-lg rounded-lg">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="text-center">Sl. No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th className="text-center">Role</th>
                                <th className="text-center">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, idx) => <tr
                                    key={user._id}
                                >
                                    <td className="text-center boder shadow-lg shadow-green-100">
                                        {
                                            (idx < 10)
                                                ?
                                                `0${idx + 1}`
                                                :
                                                `${idx + 1}`
                                        }
                                    </td>
                                    <td>
                                        <div className="font-bold">{user.name}</div>
                                    </td>
                                    <td className="w-64">
                                        {user.email}
                                    </td>
                                    <td>
                                        {
                                            user.role === 'admin'
                                                ?
                                                <div className="text-center">Admin</div>
                                                :
                                                <div
                                                    onClick={() => handleMakeAdmin(user)}
                                                    className="flex justify-center items-center text-2xl cursor-pointer"
                                                >
                                                    <FaUserShield className="text-green-500" />
                                                </div>
                                        }

                                    </td>
                                    <td>
                                        <div
                                            // onClick={() => handleDelete(user)}
                                            className="flex justify-center items-center text-2xl cursor-pointer"
                                        >
                                            <MdOutlineDeleteSweep className="text-red-500 " />
                                        </div>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;