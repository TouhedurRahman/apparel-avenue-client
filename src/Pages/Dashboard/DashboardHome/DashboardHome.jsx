import CoverImage from "../../Shared/CoverImage/CoverImage";
import dashboardBannerImage from "../../../../src/assets/images/Banner/banner-9.jpg";

const DashboardHome = () => {
    return (
        <div className="pt-20">
            <CoverImage
                title={"My Dashboard"}
                img={dashboardBannerImage}
            />
        </div>
    );
};

export default DashboardHome;