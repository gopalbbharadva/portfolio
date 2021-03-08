import React from "react";

import './projects.css';
import flutterblog from '../../images/flutterblog.png';

const flutterBlog = () => {
  return (
    <div>
      {/* <Header /> */}
      <header>
        <br />
        <br />
        <div class="header container-white">
          <img class="image" src={flutterblog} />
          <p>
            This article is intended to provide a high-level overview of the
            architecture of Flutter, including the core principles and concepts
            that form its design. <br />
            <br />
            Flutter is a cross-platform UI toolkit that is designed to allow
            code reuse across operating systems such as iOS and Android, while
            also allowing applications to interface directly with underlying
            platform services. <br />
            <br /> The goal is to enable developers to deliver high-performance
            apps that feel natural on different platforms, embracing differences
            where they exist while sharing as much code as possible. <br />
            <br />
            During development, Flutter apps run in a VM that offers stateful
            hot reload of changes without needing a full recompile. For release,
            Flutter apps are compiled directly to machine code, whether Intel
            x64 or ARM instructions, or to JavaScript if targeting the web. The
            framework is open source, with a permissive BSD license, and has a
            thriving ecosystem of third-party packages that supplement the core
            library functionality.
          </p>
        </div>
      </header>
      {/* <Footer /> */}
    </div>
  );
};
export default flutterBlog;
