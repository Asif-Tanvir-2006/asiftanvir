import React from "react";
import "./Cp.css";
import CountUp from "react-countup";
import lc from "../../assets/LeetcodeLogo.png";
import cc from "../../assets/CodechefLogo.png";
import cf from "../../assets/CodeforcesLogo.png";
import { useState, useRef, useEffect } from "react";

const NumberCountAnimation = ({ start = 0, end, duration, style }) => {
    const [isVisible, setIsVisible] = useState(false);
    const countUpRef = useRef(null);

    useEffect(() => {
        const node = countUpRef.current; 

        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.5,
            }
        );

        observer.observe(node);

        return () => {
            observer.unobserve(node); 
        };
    }, []);


    return (
        <div ref={countUpRef} className="num" style={style}>
            {isVisible && <CountUp separator="" start={start} end={end} duration={duration} />}
        </div>
    );
};

const platform = {
    leetcode: {
        primary: "#fdc35c",
        image: lc,
    },
    codechef: {
        primary: "#fdc35c",
        image: cc,
    },
    codeforces: {
        primary: "#fdc35c",
        image: cf,
    },
};

const Cp = ({ pt, rating, rank, solved, link, handle }) => {
    console.log(pt);
    const style = { color: platform[pt].primary };

    return (
        <div className={"codercard2 " + pt}>
            <div className="platform">
                <img src={platform[pt].image} alt="" srcset="" />
            </div>
            <a className='handle' href={link} no_opener no_referrer>{handle}</a>
            

            <div className="rating">
                <span className="num" style={style}>
                    <NumberCountAnimation style={style} start={0} end={rating} duration={1.5} />
                </span>
                <span>Highest Rating</span>
            </div>
            <div className="stats">
                <div className="stat">
                    <span className="num" style={style}>
                        <NumberCountAnimation style={{color: 'whitesmoke'}} start={0} end={rank} duration={1.5} />
                    </span>
                    <span>Best Rank</span>
                </div>
                <div className="stat">
                    <span className="num" style={style}>
                        <NumberCountAnimation style={{color:'whitesmoke'}} start={0} end={solved} duration={1.5} />
                    </span>
                    <span>Solved</span>
                </div>
            </div>
        </div>
    );
};

export default Cp;