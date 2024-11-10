import Trend from "./assets/icons/trending.svg"
import Release from "./assets/icons/newRelease.svg"
import commingSoon from "./assets/icons/commingSoon.svg"
import favourite from "./assets/icons/favourite.svg"
import Watch from "./assets/icons/watchLater.svg"

export const SideBar = () => {
  return (
    <aside>
				<ul className="space-y-2">
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black" href="#">
							<img src={Trend} width="24" height="24" alt="trend" />
							<span>Trending</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={Release} width="24" height="24" alt="Release" />
							<span>New Releases</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={commingSoon} width="24" height="24" alt="commingSoon" />
							<span>Coming Soon</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={favourite} width="24" height="24" alt="favourite" />
							<span>Favourites</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={Watch} width="24" height="24" alt="Watch" />
							<span>Watch Later</span>
						</a>
					</li>
				</ul>
			</aside>
  )
}
