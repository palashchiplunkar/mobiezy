import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { TbPlus } from "react-icons/tb";
import { AiOutlineMinus } from "react-icons/ai";
import "../css/CollectPayment.css";
import "../css/global.css";
import { useNavigate } from "react-router-dom";

export default function CollectPayment() {
    const navigate = useNavigate();
    const [stbOpen, setstbOpen] = useState(false);
    const [cusOpen, setcusOpen] = useState(false);
    const stbOptions = [
        {
            id: 1,
            name: "Import Packs",
            imgUrl: "import_packs.png",
        },
        {
            id: 2,
            name: "Renew STB",
            imgUrl: "renew_stb.png",
        },
        {
            id: 3,
            name: "Add Channel",
            imgUrl: "add_channel.png",
        },
        {
            id: 4,
            name: "Retrack",
            imgUrl: "sync_data.png",
        },
        {
            id: 5,
            name: "Resend Request",
            imgUrl: "resend_request.png",
        },
    ];

    const CusOptions = [
        {
            id: 1,
            name: "Edit Customer",
            imgUrl: "edit_customer.png",
            toLink: "/collectPayment/editCustomer",
        },
        {
            id: 2,
            name: "Edit STB",
            imgUrl: "edit_stb.png",
            toLink: "/collectPayment/editSetTopBox",
        },
        {
            id: 3,
            name: "Send Payment Link",
            imgUrl: "send_payment.png",
        },
        {
            id: 4,
            name: "Complaints",
            imgUrl: "complaints.png",
        },
        {
            id: 5,
            name: "History",
            imgUrl: "history_payment.png",
            toLink: "/collectPayment/history",
        },
        {
            id: 6,
            name: "Update Location",
            imgUrl: "update_location.png",
        },
        {
            id: 7,
            name: "Print Last Bill",
            imgUrl: "print_bill.png",
        },
        {
            id: 8,
            name: "Locate Address",
            imgUrl: "location_collect.png",
        },
        {
            id: 9,
            name: "Record Visit",
            imgUrl: "record_visit.png",
            toLink: "/collectPayment/recordVisit",
        },
    ];

    // window.addEventListener("popstate", () => {
    //     window.location.href = ("/customer");
    // })

    return (
        <>
            <div className="header-blue1">
                <table className="headerTable">
                    <tr className="t-row-1">
                        <td className="t-col-1">Name</td>
                        <td className="t-col-2">:</td>
                        <td className="t-col-3">Raghavendra Ganiga</td>
                    </tr>
                    <tr className="t-row-2">
                        <td className="t-col-1">Customer Id</td>
                        <td className="t-col-2">:</td>
                        <td className="t-col-3">KS00567</td>
                    </tr>
                    <tr className="t-row-3">
                        <td className="t-col-1">VC No</td>
                        <td className="t-col-2">:</td>
                        <td className="t-col-3">0000000000123456</td>
                    </tr>
                    <tr className="t-row-4">
                        <td className="t-col-1">STB No</td>
                        <td className="t-col-2">:</td>
                        <td className="t-col-3">ST00100000123456765432</td>
                    </tr>
                </table>
            </div>
            <div className="PaymentContainer">
                <div className="tableContainer">
                    <table className="bodyTable1">
                        <tr>
                            <td className="b-col-1 lS">Expiry Date</td>
                            <td className="b-col-2 lS">:</td>
                            <td
                                className="b-col-3 lS"
                                style={{ color: "#DC1515", fontWeight: "700" }}
                            >
                                01 March 2023
                            </td>
                        </tr>
                        <tr>
                            <td className="b-col-1 lS">Last Paid Amount</td>
                            <td className="b-col-2 lS">:</td>
                            <td className="b-col-3 lS">₹ 300.00</td>
                        </tr>
                    </table>
                </div>
                <div className="tableContainer">
                    <table className="bodyTable1">
                        <tr>
                            <td className="b-col-1 lS">Base Amount</td>
                            <td className="b-col-2 lS">:</td>
                            <td className="b-col-3 lS">₹ 280.00</td>
                        </tr>
                        <tr>
                            <td className="b-col-1 lS">Tax Amount</td>
                            <td className="b-col-2 lS">:</td>
                            <td className="b-col-3 lS">₹ 21.60</td>
                        </tr>
                        <tr>
                            <td className="b-col-1 lS">Tax Amount</td>
                            <td className="b-col-2 lS">:</td>
                            <td className="b-col-3 lS">₹ 21.60</td>
                        </tr>
                        <tr>
                            <td className="b-col-1 lS">Total Pack Amount</td>
                            <td className="b-col-2 lS">:</td>
                            <td className="b-col-3 lS">₹ 301.60</td>
                        </tr>
                        <tr>
                            <td className="b-col-1 lS">Previous Balance</td>
                            <td className="b-col-2 lS">:</td>
                            <td className="b-col-3 lS">₹ 1.60</td>
                        </tr>
                        <tr>
                            <td className="b-col-1 lS">Amount Adjusted</td>
                            <td className="b-col-2 lS">:</td>
                            <td className="b-col-3 lS">₹ -3.20</td>
                        </tr>
                        <tr>
                            <td className="b-col-1 lS">Total Payable Amount</td>
                            <td className="b-col-2 lS">:</td>
                            <td
                                className="b-col-3 lS"
                                style={{ color: "#DC1515", fontWeight: "700" }}
                            >
                                ₹ 300.00{" "}
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="tableContainer">
                    <input type={"number"} />
                    <input type={"text"} placeholder="Customer Mobile Number" />
                    <input type={"text"} placeholder="Write Your Comments" />
                    <select>
                        <option>CASH</option>
                    </select>

                    <input type={"text"} placeholder="Next Expiry Date" />
                    <div className="collectBtn-div">
                        <button className="collectbtnPayment" type="submit">
                            Collect
                        </button>
                    </div>
                </div>
                <div className="CollapseContainer">
                    <div style={{ width: "90%" }}>
                        <Collapsible
                            trigger={[
                                "STB Integrated Options",
                                <TbPlus
                                    style={{ width: "30px", height: "30px" }}
                                />,
                            ]}
                            triggerClassName={"Collapsible__trigger1"}
                            triggerOpenedClassName={"Collapsible__trigger1Open"}
                            triggerWhenOpen={[
                                "STB Integrated Options",
                                <AiOutlineMinus
                                    style={{ width: "30px", height: "30px" }}
                                />,
                            ]}
                            //   isOpen={stbOpen}
                            //   onOpen={()=>(setcusOpen(false))}
                            open={stbOpen}
                            handleTriggerClick={() => {
                                setstbOpen(!stbOpen);
                                setcusOpen(false);
                            }}
                            transitionCloseTime={"300"}
                        >
                            <div className="STBOptionsContainer">
                                {stbOptions.map((option) => {
                                    return (
                                        <div
                                            className="STBEachOption"
                                            id={option.id}
                                        >
                                            <img
                                                src={require("../assets/" +
                                                    option.imgUrl)}
                                                width={"45%"}
                                            />
                                            <p>{option.name}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </Collapsible>
                    </div>
                    <div style={{ width: "90%", marginBottom: "2vh" }}>
                        <Collapsible
                            trigger={[
                                "Customer Related Operations",
                                <TbPlus
                                    style={{ width: "30px", height: "30px" }}
                                />,
                            ]}
                            triggerClassName={"Collapsible__trigger2"}
                            triggerOpenedClassName={"Collapsible__trigger2Open"}
                            triggerWhenOpen={[
                                "Customer Related Operations",
                                <AiOutlineMinus
                                    style={{ width: "30px", height: "30px" }}
                                />,
                            ]}
                            transitionCloseTime={"200"}
                            //   isOpen={cusOpen}
                            //   onOpen={()=>setstbOpen(false)}
                            open={cusOpen}
                            handleTriggerClick={() => {
                                setcusOpen(!cusOpen);
                                setstbOpen(false);
                            }}
                        >
                            <div className="STBOptionsContainer">
                                {CusOptions.map((option) => {
                                    return (
                                        <div
                                            className="STBEachOption"
                                            id={option.id}
                                            onClick={() => {
                                                navigate(option.toLink);
                                            }}
                                        >
                                            <img
                                                src={require("../assets/" +
                                                    option.imgUrl)}
                                                width={"45%"}
                                            />
                                            <p>{option.name}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </Collapsible>
                    </div>
                </div>
            </div>
        </>
    );
}
