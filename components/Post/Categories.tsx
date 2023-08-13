import React, { useId } from 'react'
import styles from '@styles/blog.module.css'

const Categories = ({ categories }: CategoriesProps): JSX.Element => {
    const id = useId()
    return (
        <div className={styles.categories}>
            {categories.map((category, index) => <span key={`${id}-${index}`} className={styles.category}>{category}</span>)}
        </div>
    )
}

export default Categories
