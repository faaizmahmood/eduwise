/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './subCategory.module.scss';
import optionsWithSubcategories from './subCategoryItems/subCategoryItems.js';
import { useLocation } from 'react-router-dom';

const SubCategory = () => {
    const location = useLocation();

    const { activeButtons } = location.state || {};

    // Find the matching category
    const filteredCategory = optionsWithSubcategories?.find((ele) => ele.category === activeButtons);

    return (
        <section className={`${styles.subCategory}`}>
            <div className={`${styles.wrapper}`}>
                {filteredCategory?.subcategories?.map((ele, index) => (
                    <button
                        key={index}
                        className={`${styles.button}`}
                    >
                        {ele}
                    </button>
                ))}
            </div>

            <p className={`${styles.skip_btn}`}>Go To Dashboard</p>
        </section>
    );
};

export default SubCategory;
