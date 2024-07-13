const VideoCard = (props : any) => {
    return (
        <>
            <div className="p-2 cursor-pointer">
                <img src={props.thumbnail} alt="thumbnail" className="rounded-xl" />
                <div className="grid grid-cols-12 pt-2">
                    <div className="col-span-1 pt-1">
                        <img src={props.image} alt="image" className="rounded-full" />
                        {/* <img src="./channel.png" alt="thumbnail" className="rounded-full" /> */}
                    </div>
                    <div className="col-span-11 pl-2">
                        <div>
                            {props.title}
                        </div>
                        <div className="text-base text-gray-400">

                            {props.channel}
                        </div>
                        <div className="text-base text-gray-400">

                            {props.views}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default VideoCard