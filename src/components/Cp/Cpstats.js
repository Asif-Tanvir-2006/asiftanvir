import React from "react";
import Cp from "./Cp.js";
import "./Cpstats.css";
import TopicName from "../TopicName/TopicName.js"
// import CoderCard2 from "../../components/CoderCard2/CoderCard2.jsx";
export default function CPStats() {
    return (
        <div className="wrapper_cp">
            <TopicName title={"CP_Stats"}></TopicName>
            <div className="cp-stats sec s3">

                <div className="cpcard-list">
                    {/* <CPcard
                    web={"LeetCode"}
                    rating={1912}
                    contests={21}
                    problems={718}
                    link={"https://leetcode.com/__Abhijit__/"}
                />
                <CPcard
                    web={"CodeChef"}
                    rating={1717}
                    contests={26}
                    problems={236}
                    link={"https://www.codechef.com/users/artistrup07"}
                />
                <CPcard
                    web={"CodeForces"}
                    rating={1403}
                    contests={38}
                    problems={359}
                    link={"https://codeforces.com/profile/abhijit07cf"}
                /> */}

                    <Cp pt={"leetcode"} link={"https://leetcode.com/_Asif_Tanvir_/"} rank={416} rating={1772} solved={740} key={1} handle='_Asif_Tanvir_' />
                    <Cp pt={"codechef"} link={"https://www.codechef.com/users/asif_tanvir"} rank={440} rating={1490} solved={7} key={2} handle='asif_tanvir' />
                    <Cp pt={"codeforces"} link={"https://codeforces.com/profile/asif_tanvir"} rank={4040} rating={1227} solved={123} key={3} handle='asif_tanvir' />

                </div>
            </div>

        </div>
    );
}
