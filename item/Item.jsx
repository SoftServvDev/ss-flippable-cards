// This is the portfolio item
// Within the div it gives a responsive breakpoint class based on the props given

import React from 'react'

import styles from './Item.module.css'

const ITEM = props => {
    if (props.style) {
        return (
            <div className={`
            ${styles.card}
            ${props.xs_1 ? styles.xs_1 : ""}
            ${props.xs_2 ? styles.xs_2 : ""}
            ${props.xs_3 ? styles.xs_3 : ""}
            ${props.xs_4 ? styles.xs_4 : ""}
            ${props.sm_1 ? styles.sm_1 : ""}
            ${props.sm_2 ? styles.sm_2 : ""}
            ${props.sm_3 ? styles.sm_3 : ""}
            ${props.sm_4 ? styles.sm_4 : ""}
            ${props.md_1 ? styles.md_1 : ""}
            ${props.md_2 ? styles.md_2 : ""}
            ${props.md_3 ? styles.md_3 : ""}
            ${props.md_4 ? styles.md_4 : ""}
            ${props.lg_1 ? styles.lg_1 : ""}
            ${props.lg_2 ? styles.lg_2 : ""}
            ${props.lg_3 ? styles.lg_3 : ""}
            ${props.lg_4 ? styles.lg_4 : ""}
            ${props.xl_1 ? styles.xl_1 : ""}
            ${props.xl_2 ? styles.xl_2 : ""}
            ${props.xl_3 ? styles.xl_3 : ""}
            ${props.xl_4 ? styles.xl_4 : ""}
            ${props.xxl_1 ? styles.xxl_1 : ""}
            ${props.xxl_2 ? styles.xxl_2 : ""}
            ${props.xxl_3 ? styles.xxl_3 : ""}
            ${props.xxl_4 ? styles.xxl_4 : ""}
            `}
            style={props.style}>
                <div className={styles.flip_card_inner}>
                    <div className={styles.flip_card_front}>
                        <img src={props.card_front_url} alt={card_front_alt} className={styles.card_inner_image} />
                    </div>
                    <div className={styles.flip_card_back} style={{ backgroundImage: `url(${props.card_back_url})` }}>
                        <div className={styles.button_curtain}></div>
                        {props.try_button == true ? <a href={props.try_it_link} className={styles.try_it_button}>{props.try_text ? props.try_text : "Try"}</a> : ""}
                        <a href={props.repo_link} className={styles.repo_button}>{props.repo_text ? props.repo_text : "Repo"}</a>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={`
            ${styles.card}
            ${props.xs_1 ? styles.xs_1 : ""}
            ${props.xs_2 ? styles.xs_2 : ""}
            ${props.xs_3 ? styles.xs_3 : ""}
            ${props.xs_4 ? styles.xs_4 : ""}
            ${props.sm_1 ? styles.sm_1 : ""}
            ${props.sm_2 ? styles.sm_2 : ""}
            ${props.sm_3 ? styles.sm_3 : ""}
            ${props.sm_4 ? styles.sm_4 : ""}
            ${props.md_1 ? styles.md_1 : ""}
            ${props.md_2 ? styles.md_2 : ""}
            ${props.md_3 ? styles.md_3 : ""}
            ${props.md_4 ? styles.md_4 : ""}
            ${props.lg_1 ? styles.lg_1 : ""}
            ${props.lg_2 ? styles.lg_2 : ""}
            ${props.lg_3 ? styles.lg_3 : ""}
            ${props.lg_4 ? styles.lg_4 : ""}
            ${props.xl_1 ? styles.xl_1 : ""}
            ${props.xl_2 ? styles.xl_2 : ""}
            ${props.xl_3 ? styles.xl_3 : ""}
            ${props.xl_4 ? styles.xl_4 : ""}
            ${props.xxl_1 ? styles.xxl_1 : ""}
            ${props.xxl_2 ? styles.xxl_2 : ""}
            ${props.xxl_3 ? styles.xxl_3 : ""}
            ${props.xxl_4 ? styles.xxl_4 : ""}
            `}>
                <div className={styles.flip_card_inner}>
                    <div className={styles.flip_card_front}>
                        <img src={props.card_front_url} alt={props.card_front_alt ? props.card_front_alt : ""} className={styles.card_inner_image} />
                    </div>
                    <div className={styles.flip_card_back} style={{ backgroundImage: `url(${props.card_back_url})` }}>
                        <div className={styles.button_curtain}>
                            <p>
                                {props.card_text}
                            </p>
                        </div>
                        {props.try_button == true ? <a href={props.try_it_link} className={styles.try_it_button}>{props.try_text ? props.try_text : "Try"}</a> : ""}
                        <a href={props.repo_link} className={styles.repo_button}>{props.repo_text ? props.repo_text : "Repo"}</a>
                    </div>
                </div>
            </div>
        )
    }
}

export { ITEM }