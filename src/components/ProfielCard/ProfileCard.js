import "bulma/css/bulma.css";

const ProfileCard = () => {

    return (
        <div class="card column is-one-quarter">
            <div class="card-image">
                <figure class="image 4by3">
                    <img src="https://imgs.search.brave.com/wHcOEBf2hYkAI0WuZmF5bbAMn1oBWD9wX7QEBQiixXM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWM5LmRlcG9zaXRw/aG90b3MuY29tLzE2/NTM1NjkvMTE3Ny9p/LzYwMC9kZXBvc2l0/cGhvdG9zXzExNzcw/Nzg4LXN0b2NrLXBo/b3RvLWUtY29tbWVy/Y2UuanBn" alt="Placeholder image"/>
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img src="https://imgs.search.brave.com/OD5LsjQ3dhc5Rsy8_hu964jxjXl_j8EMuWWRlcaeYmE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzk5Lzc4LzI2/LzM2MF9GXzU5OTc4/MjY4NF9aT2tTYUIy/TEU4Q2ZFZm9uVndh/dlVaU2tpalZnMTly/by5qcGc" alt="Placeholder image"/>
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">John Smith</p>
                        <p class="subtitle is-6">@johnsmith</p>
                    </div>
                </div>
                <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.
                    <br/>
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;