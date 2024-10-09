import React from 'react';

const Image = ({stack, desc_stack, classicon}) => {
    return (
        <div className="image-container">
            <img loading="lazy" className={`${classicon} py-3 fadeInUp  border-2 border-blue-600 rounded-xl px-8 w-32 h-20 max-w-full icon`} src={stack} alt={desc_stack} />
        </div>
        
    );
};

export default Image;