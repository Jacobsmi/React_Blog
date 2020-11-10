import React, { useEffect, useState } from 'react';

const Filterer = (props) => {
    const [subjects, setSubjects] = useState([])
    // Changes every time allPosts changes
    useEffect(() => {
        // Splits apart the subjects from each post into individual strings and turns them into a set
        var allSubjects = new Set()
        props.allPosts.forEach(post => {
            var parts = post.subjects.split(',')
            parts.forEach(part => {
                part = part.replace(/^\s+/g, '');
                allSubjects.add(part)
            })
        });
        setSubjects(Array.from(allSubjects))
    }, [props.allPosts])
    
    return (
        <div className='Filterer'>
            <div className='FiltererHeader'>Filter</div>
            {subjects.map(subject => {
                return (
                    <div className='Subject' key={subject}>
                        <input type='checkbox' id={subject + '-input'} value={subject} onChange={() => { props.handleClick(subject) }} />
                        <label htmlFor={subject + '-input'}>{subject}</label>
                    </div>
                )
            })}
        </div>
    )
}

export default Filterer;