const EmotionItem = ({ emotion_id, emotion_image, emotion_descript, onClick, isSelected }) => {
    return (
        <button type="button" 
            className={['EmotionItem', `EmotionItem--${emotion_id}`, isSelected ? 'focus' : ''].join(' ') } 
            onClick={() => onClick(emotion_id)}
        >
            <img src={emotion_image} />
            <span>{emotion_descript}</span>
        </button>
    )
}

export default EmotionItem;