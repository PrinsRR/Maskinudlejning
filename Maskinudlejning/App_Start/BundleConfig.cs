using System.Web;
using System.Web.Optimization;

namespace Maskinudlejning.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/js").Include(
                "~/Scripts/jQuery.Bootstrap.min.js"
, "~/Scripts/jquery.gsap.min.js"
                , "~/Scripts/ScrollMagic.min.js",
"~/Scripts/animation.gsap.min.js"
, "~/Scripts/imagesloaded.pkgd.min.js"
, "~/Scripts/isotope.pkgd.min.js"
, "~/Scripts/lightbox.js"
, "~/Scripts/masonry-horizontal.js"
, "~/Scripts/owl.carousel.min.js"
, "~/Scripts/packery-mode.pkgd.min.js"

, "~/Scripts/ScrollToPlugin.min.js"
, "~/Scripts/TweenMax.min.js"
, "~/Scripts/myjs.js"
                     ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/Bootstrap.FontAwsome.min.css",
                "~/Content/owl.carousel.css",
                "~/Content/lightbox.css",
                "~/Content/Styles.min.css"
                ));


        }
    }
}