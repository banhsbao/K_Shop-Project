﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace KShop.App_Start {
    public class WebApiConfig {
        public static void Register(HttpConfiguration config) {
            // TODO: Add any additional configuration code.

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.EnableCors();

        }
    }
}
