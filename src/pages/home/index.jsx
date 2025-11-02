import React from 'react'
import { Col1, Col2, Row, Styled } from './styled'
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt, FaUser, FaYoutube } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import IndianFlag from '../../components/IndianFlag'
import { TbWorldWww } from 'react-icons/tb'

const Home = () => {
    function formatISTLabel(iso) {
        try {
            const d = new Date(iso);
            const parts = new Intl.DateTimeFormat("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
                timeZone: "Asia/Kolkata",
            }).formatToParts(d);

            const get = (t) => parts.find((p) => p.type === t)?.value || "";
            return `${get("month")} ${get("day")}, ${get("year")} ${get("hour")}:${get("minute")}:${get("second")} hrs`;
        } catch {
            return "-";
        }
    }

    // choose commit time, fall back to build time
    const LAST_ISO =
        (typeof __APP_COMMIT_ISO__ !== "undefined" && __APP_COMMIT_ISO__) ||
        (typeof __APP_BUILD_ISO__ !== "undefined" && __APP_BUILD_ISO__) ||
        null;

    const lastUpdatedLabel = LAST_ISO ? formatISTLabel(LAST_ISO) : "-";

    return (
        <>
            <Styled.Wrapper>
                <h3>HTML [Hypertext Markup Language] Notes - last updated: <time dateTime={LAST_ISO || ""}>{lastUpdatedLabel}</time></h3>

                <fieldset>
                    <legend>About Project</legend>
                    <div className='para'>
                        <h2>HTML Lab — Core HTML Only</h2>
                        <p>
                            This is an interactive, no-nonsense reference for <strong>core HTML</strong>-semantics first, zero fancy frameworks. Every topic stays small and practical so you can learn, try, and move on.
                        </p>

                        <p>
                            What to expect:
                        </p>
                        <ul>
                            <li>Clean explanations of tags, attributes, and patterns you actually use daily.</li>
                            <li>Monaco-powered editor (soon) with live preview to experiment safely.</li>
                            <li>Built-in a11y and performance nudges (labels, alt text, lazy images, etc.).</li>
                            <li>Copy-ready snippets kept minimal and standards-compliant.</li>
                        </ul>

                        <p>
                            Philosophy:
                            <em>Use the right element, keep structure meaningful, enhance progressively.</em>
                            Links are for navigation, buttons are for actions, and tables are for data—simple rules,
                            fewer bugs.
                        </p>

                        <p>
                            Start with the foundations, skim the landmarks, then practice forms and media.
                            Small reps beat big theory. Let's ship solid HTML.
                        </p>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>About Developer</legend>
                    <div className='aboutDeveloper'>
                        <Row>
                            <Col1>Name</Col1>
                            <Col2>
                                Ashish Ranjan
                                <div className="icon"><FaUser size={20} /></div>
                            </Col2>
                        </Row>
                        <Row>
                            <Col1>Phone</Col1>
                            <Col2>
                                <a href="tel:+918123747965">+91 8123747965</a>
                                <div className="icon"><FaPhoneAlt size={20} /></div>
                            </Col2>
                        </Row>
                        <Row>
                            <Col1>Email</Col1>
                            <Col2>
                                <a href="mailto:ash.ranjan09@gmail.com">ash.ranjan09@gmail.com</a>
                                <div className="icon"><MdEmail size={20} /></div>
                            </Col2>
                        </Row>
                        <Row>
                            <Col1>Nationality</Col1>
                            <Col2>
                                The Republic of India
                                <div className="icon"><IndianFlag /></div>
                            </Col2>
                        </Row>
                        <Row>
                            <Col1>Website</Col1>
                            <Col2>
                                <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">https://www.ashishranjan.net/</a>
                                <div className="icon"><TbWorldWww size={20} /></div>
                            </Col2>
                        </Row>
                        <Row>
                            <Col1>Old Website</Col1>
                            <Col2>
                                <a href="http://www.ashishranjan.in/" target="_blank" rel="noopener noreferrer">http://www.ashishranjan.in/</a>
                                <div className="icon"><TbWorldWww size={20} /></div>
                            </Col2>
                        </Row>
                        <Row>
                            <Col1>Facebook</Col1>
                            <Col2>
                                <a href="https://www.facebook.com/theash.ashish/" target="_blank" rel="noopener noreferrer">facebook.com/theash.ashish/</a>
                                <div className="icon"><FaFacebook size={20} /></div>
                            </Col2>
                        </Row>
                        <Row>
                            <Col1>LinkedIn</Col1>
                            <Col2>
                                <a href="https://www.linkedin.com/in/aashishranjan/" target="_blank" rel="noopener noreferrer">linkedin.com/in/aashishranjan/</a>
                                <div className="icon"><FaLinkedin size={20} /></div>
                            </Col2>
                        </Row>
                        <Row>
                            <Col1>YouTube</Col1>
                            <Col2>
                                <a href="https://www.youtube.com/channel/UCLHIBQeFQIxmRveVAjLvlbQ" target="_blank" rel="noopener noreferrer">youtube.com/channel/UCLHIBQeFQIxmRveVAjLvlbQ</a>
                                <div className="icon"><FaYoutube size={20} /></div>
                            </Col2>
                        </Row>
                        <Row>
                            <Col1>GitHub</Col1>
                            <Col2>
                                <a href="https://github.com/a2rp" target="_blank" rel="noopener noreferrer">github.com/a2rp</a>
                                <div className="icon"><FaGithub size={20} /></div>
                            </Col2>
                        </Row>
                    </div>
                </fieldset>
            </Styled.Wrapper>
        </>
    )
}

export default Home
