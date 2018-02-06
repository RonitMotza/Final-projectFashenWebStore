using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Project_Gmar.Startup))]
namespace Project_Gmar
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
