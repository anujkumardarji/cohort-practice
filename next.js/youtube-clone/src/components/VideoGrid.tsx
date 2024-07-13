import VideoCard from "./VideoCard"


const videos = [
    {
        title: "Community - Group Reaction",
        views: "164K Views | 5 Years ago",
        channel: "The Normies",
        image: "channel.png",
        thumbnail: "thumbnail.png"
    },
    {
        title: "Community - Group Reaction",
        views: "164K Views | 5 Years ago",
        channel: "The Normies",
        image: "channel.png",
        thumbnail: "thumbnail.png"
    },
    {
        title: "Community - Group Reaction",
        views: "164K Views | 5 Years ago",
        channel: "The Normies",
        image: "channel.png",
        thumbnail: "thumbnail.png"
    },
    {
        title: "Community - Group Reaction",
        views: "164K Views | 5 Years ago",
        channel: "The Normies",
        image: "channel.png",
        thumbnail: "thumbnail.png"
    },
    {
        title: "Community - Group Reaction",
        views: "164K Views | 5 Years ago",
        channel: "The Normies",
        image: "channel.png",
        thumbnail: "thumbnail.png"
    },
]
const VideoGrid = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    videos.map((video: any) => (
                        <VideoCard
                            title={video.title}
                            views={video.views}
                            channel={video.channel}
                            image={video.image}
                            thumbnail={video.thumbnail}
                        ></VideoCard>
                    ))
                }


            </div>
        </>
    )
}

export default VideoGrid