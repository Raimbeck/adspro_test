using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(adspro_test.Startup))]
namespace adspro_test
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
