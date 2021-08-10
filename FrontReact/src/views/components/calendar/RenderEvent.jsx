const RenderEvent = (eventInfo) => {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
            <i>{eventInfo.event.description}</i>
        </>
    )
}

export default RenderEvent