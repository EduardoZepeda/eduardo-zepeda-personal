import React, { useId } from 'react'
import styles from '@styles/blog.module.css'

const Categories = ({ categories }: CategoriesProps): JSX.Element => {
    const id = useId()
    return (
        <div className={styles.categories}>
            {categories.map((category, index) => <div key={`${id}-${index}`} className={styles.category}>{category}</div>)}
        </div>
    )
}

export default Categories
