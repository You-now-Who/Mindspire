import React from "react";

function Skills() {
  return (
    <>
      <div class="container-fluid bg-primary py-5 mb-5 page-header">
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-lg-10 text-center">
              <h1 class="display-3 text-white animated slideInDown">Skills</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                  <li class="breadcrumb-item">
                    <a class="text-white" href="#">
                      Home
                    </a>
                  </li>
                  <li class="breadcrumb-item">
                    <a class="text-white" href="#">
                      Pages
                    </a>
                  </li>
                  <li
                    class="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    Skills
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Skills
        </h6>
        <h1 className="mb-5">Your Skills</h1>
      </div>

       <div className="tree">
        <ul>
          <li>
            <a href="#">
              <div className="mx-auto ">
                <img
                  src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg"
                  alt="Sample avatar"
                />
              </div>
              <p className="font-weight-bold mt-4 mb-3">
                Introduction to Programming
              </p>
            </a>
            <ul className="inn_line">
              <li>
                <a href="#">
                  <div className="mx-auto">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU"
                      alt="Sample avatar"
                    />
                  </div>
                  <p className="font-weight-bold mt-4 mb-3">HTML</p>
                </a>
                <ul className="inn_line">
                  <li>
                    <a href="#">
                      <div className="mx-auto">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/919/919826.png"
                          alt="Sample avatar"
                        />
                      </div>
                      <p className="font-weight-bold mt-4 mb-3">CSS</p>
                    </a>
                    <ul className="inn_line">
                      <li>
                        <a href="#">
                          <div className="mx-auto">
                            <img
                              src="https://www.datocms-assets.com/48401/1627664298-javascript.png?fit=max&w=900"
                              alt="Sample avatar"
                            />
                          </div>
                          <p className="font-weight-bold mt-4 mb-3">
                            Javascript
                          </p>
                        </a>
                        <ul className="inn_line">
                          <li>
                            <a href="#">
                              <div className="mx-auto">
                                <img
                                  src="https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
                                  alt="Sample avatar"
                                />
                              </div>
                              <p className="font-weight-bold mt-4 mb-3">
                                React JS
                              </p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div className="mx-auto">
                                <img
                                  src="https://www.javatpoint.com/js/nodejs/images/node-js-tutorial.png"
                                  alt="Sample avatar"
                                />
                              </div>
                              <p className="font-weight-bold mt-4 mb-3">
                                Node JS
                              </p>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <div className="mx-auto">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoL3eUPZ3BFg37Z4fybogt70R0NPbt576DkQ&usqp=CAU"
                      alt="Sample avatar"
                    />
                  </div>
                  <p className="font-weight-bold mt-4 mb-3">
                    Mobile App Development
                  </p>
                </a>
                <ul className="inn_line">
                  <li>
                    <a href="#">
                      <div className="mx-auto">
                        <img
                          src="https://www.developer.com/wp-content/uploads/2021/09/Java-tutorials.jpg"
                          alt="Sample avatar"
                        />
                      </div>
                      <p className="font-weight-bold mt-4 mb-3">Java</p>
                    </a>
                    <ul className="inn_line">
                      <li>
                        <a href="#">
                          <div className="mx-auto">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5fGP3X1ULNYGQ_x8k0gsh8nfBz_XX7UxXg&usqp=CAU"
                              alt="Sample avatar"
                            />
                          </div>
                          <p className="font-weight-bold mt-4 mb-3">Kotlin</p>
                        </a>
                        <ul className="inn_line">
                          <li>
                            <a href="#">
                              <div className="mx-auto">
                                <img
                                  src="https://img.freepik.com/free-icon/swift_318-566115.jpg?w=2000"
                                  alt="Sample avatar"
                                />
                              </div>
                              <p className="font-weight-bold mt-4 mb-3">
                                Swift
                              </p>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <div className="mx-auto">
                        <img
                          src="https://vectorseek.com/wp-content/uploads/2021/12/React-Native-Logo-Vector.jpg"
                          alt="Sample avatar"
                        />
                      </div>
                      <p className="font-weight-bold mt-4 mb-3">React Native</p>
                    </a>
                    <ul className="inn_line">
                      <li>
                        <a href="#">
                          <div className="mx-auto">
                            <img
                              src="https://cdn.dribbble.com/users/1622791/screenshots/11174104/flutter_intro.png"
                              alt="Sample avatar"
                            />
                          </div>
                          <p className="font-weight-bold mt-4 mb-3">Flutter</p>
                        </a>
                        <ul className="inn_line">
                          <li>
                            <a href="#">
                                  <div className="mx-auto">
                                <img
                                  src="https://dwglogo.com/wp-content/uploads/2018/03/Dart_logo.png"
                                  alt="Sample avatar"
                                />
                              </div>
                              <p className="font-weight-bold mt-4 mb-3">Dart</p>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <div className="mx-auto">
                    <img
                      src="https://r2j4y6x9.map2.ssl.hwcdn.net/wp-content/uploads/2018/06/Adding-Polish-to-Games.jpg"
                      alt="Sample avatar"
                    />
                  </div>
                  <p className="font-weight-bold mt-4 mb-3">Game Development</p>
                </a>
                <ul className="inn_line">
                  <li>
                    <a href="#">
                      <div className="mx-auto">
                        <img
                          src="https://play-lh.googleusercontent.com/xdVqKpXkeU99o26Ibly4yTzjEK_QiQke_vjGsCNto-cQ-VZ1c4MFXm22PRdOo5PQN7Y=w600-h300-pc0xffffff-pd"
                          alt="Sample avatar"
                        />
                      </div>
                      <p className="font-weight-bold mt-4 mb-3">LOVE 2D</p>
                    </a>
                    <ul className="inn_line">
                      <li>
                        <a href="#">
                          <div className="mx-auto">
                            <img
                              src="https://w7.pngwing.com/pngs/911/748/png-transparent-unity-technologies-adobe-flash-computer-software-technology-unity-emblem-electronics-company.png"
                              alt="Sample avatar"
                            />
                          </div>
                          <p className="font-weight-bold mt-4 mb-3">Unity</p>
                        </a>
                        <ul className="inn_line">
                          <li>
                            <a href="#">
                              <div className="mx-auto">
                                <img
                                  src="https://www.intel.com/content/dam/develop/external/us/en/images/unreal-engine-optmizations-logo-759458.png"
                                  alt="Sample avatar"
                                />
                              </div>
                              <p className="font-weight-bold mt-4 mb-3">
                                Unreal Engine
                              </p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div className="mx-auto">
                                <img
                                  src="https://w7.pngwing.com/pngs/1015/840/png-transparent-godot-game-engine-video-game-3d-computer-graphics-2d-computer-graphics-%D8%A7%D8%AE%D8%AF%D8%AB%D8%BA-game-3d-computer-graphics-text-thumbnail.png"
                                  alt="Sample avatar"
                                />
                              </div>
                              <p className="font-weight-bold mt-4 mb-3">
                                Godot
                              </p>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <div className="mx-auto">
                    <img
                      src="https://e7.pngegg.com/pngimages/465/779/png-clipart-blue-and-white-c-logo-the-c-programming-language-computer-programming-computer-icons-programmer-blue-angle.png"
                      alt="Sample avatar"
                    />
                  </div>
                  <p className="font-weight-bold mt-4 mb-3">C</p>
                </a>
                <ul className="inn_line">
                  <li>
                    <a href="#">
                      <div className="mx-auto">
                        <img
                          src="https://download.logo.wine/logo/C%2B%2B/C%2B%2B-Logo.wine.png"
                          alt="Sample avatar"
                        />
                      </div>
                      <p className="font-weight-bold mt-4 mb-3">C++</p>
                    </a>
                    <ul className="inn_line">
                      <li>
                        <a href="#">
                          <div className="mx-auto">
                            <img
                              src="https://e7.pngegg.com/pngimages/856/814/png-clipart-rust-system-programming-language-computer-programming-rusted-miscellaneous-computer-programming-thumbnail.png"
                              alt="Sample avatar"
                            />
                          </div>
                          <p className="font-weight-bold mt-4 mb-3">Rust</p>
                        </a>
                        <ul className="inn_line">
                          <li>
                            <a href="#">
                              <div className="mx-auto">
                                <img
                                  src="https://img.stackshare.io/service/1012/scala.png"
                                  alt="Sample avatar"
                                />
                              </div>
                              <p className="font-weight-bold mt-4 mb-3">
                                Scala
                              </p>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <div className="mx-auto">
                        <img
                          src="https://e7.pngegg.com/pngimages/210/105/png-clipart-c-c-computer-programming-javascript-others-miscellaneous-purple.png"
                          alt="Sample avatar"
                        />
                      </div>
                      <p className="font-weight-bold mt-4 mb-3">C#</p>
                    </a>
                    <ul className="inn_line">
                      <li>
                        <a href="#">
                          <div className="mx-auto">
                            <img
                              src="https://pbs.twimg.com/profile_images/1142154201444823041/O6AczwfV_400x400.png"
                              alt="Sample avatar"
                            />
                          </div>
                          <p className="font-weight-bold mt-4 mb-3">Go</p>
                        </a>
                        <ul className="inn_line">
                          <li>
                            <a href="#">
                              <div className="mx-auto">
                                <img
                                  src="https://play-lh.googleusercontent.com/YrY5n418F1joskaaIE1ou8991mmdEaTR66Mr8fHwuRGIkE9ZSnHeiJc-BcUoeU4dhNZl"
                                  alt="Sample avatar"
                                />
                              </div>
                              <p className="font-weight-bold mt-4 mb-3">
                                Assembly
                              </p>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <div className="mx-auto">
                    <img
                      src="https://c8.alamy.com/comp/2AK0KF2/artificial-intelligence-ai-vector-logo-artificial-human-brain-human-head-silhouette-abstract-concept-of-cyber-technology-machine-learning-robot-a-2AK0KF2.jpg"
                      alt="Sample avatar"
                    />
                  </div>
                  <p className="font-weight-bold mt-4 mb-3">
                    Artificial Intelligence
                  </p>
                </a>
                <ul className="inn_line">
                  <li>
                    <a href="#">
                      <div className="mx-auto">
                        <img
                          src="https://qph.cf2.quoracdn.net/main-qimg-28cadbd02699c25a88e5c78d73c7babc"
                          alt="Sample avatar"
                        />
                      </div>
                      <p className="font-weight-bold mt-4 mb-3">Python</p>
                    </a>
                    <ul className="inn_line">
                      <li>
                        <a href="#">
                          <div className="mx-auto">
                            <img
                              src="https://static.javatpoint.com/tutorial/keras/images/keras.png"
                              alt="Sample avatar"
                            />
                          </div>
                          <p className="font-weight-bold mt-4 mb-3">Keras</p>
                        </a>
                        <ul className="inn_line">
                          <li>
                            <a href="#">
                              <div className="mx-auto">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfphQx3WGVL8dAOuLLeDelClkxaKZ-CgZUHV1O1cqHADd7CueBrFsjRXLyN4rIoxKVzN4&usqp=CAU"
                                  alt="Sample avatar"
                                />
                              </div>
                              <p className="font-weight-bold mt-4 mb-3">
                                Tensorflow
                              </p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div className="mx-auto">
                                <img
                                  src="https://ih1.redbubble.net/image.576101068.2529/st,small,507x507-pad,600x600,f8f8f8.u10.jpg"
                                  alt="Sample avatar"
                                />
                              </div>
                              <p className="font-weight-bold mt-4 mb-3">
                                PyTorch
                              </p>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Skills;
// import React from "react";

// function Skills() {
//   return (
//     <>
//       <div class="container-fluid bg-primary py-5 mb-5 page-header">
//         <div class="container py-5">
//           <div class="row justify-content-center">
//             <div class="col-lg-10 text-center">
//               <h1 class="display-3 text-white animated slideInDown">Skills</h1>
//               <nav aria-label="breadcrumb">
//                 <ol class="breadcrumb justify-content-center">
//                   <li class="breadcrumb-item">
//                     <a class="text-white" href="#">
//                       Home
//                     </a>
//                   </li>
//                   <li class="breadcrumb-item">
//                     <a class="text-white" href="#">
//                       Pages
//                     </a>
//                   </li>
//                   <li
//                     class="breadcrumb-item text-white active"
//                     aria-current="page"
//                   >
//                     Skills
//                   </li>
//                 </ol>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
//         <h6 className="section-title bg-white text-center text-primary px-3">
//           Skills
//         </h6>
//         <h1 className="mb-5">Your Skills</h1>
//       </div>

//       <div className="tree">
//         <ul>
//           <li>
//             <a href="#">
//               <div className="mx-auto ">
//                 <img
//                   src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg"
//                   alt="Sample avatar"
//                 />
//               </div>
//               <p className="font-weight-bold mt-4 mb-3">
//                 Introduction to Programming
//               </p>
//             </a>
//             <ul className="inn_line">
//               <li>
//                 <a href="#">
//                   <div className="mx-auto">
//                     <img
//                       src="https://cdn2.iconfinder.com/data/icons/avatar-vol-1-5/512/7_Asian_avatar_businessman_chinese-512.png"
//                       alt="Sample avatar"
//                     />
//                   </div>
//                   <p className="font-weight-bold mt-4 mb-3">HTML</p>
//                 </a>
//                 <ul className="inn_line">
//                   <li>
//                     <a href="#">
//                       <div className="mx-auto">
//                         <img
//                           src="https://i.pinimg.com/originals/d3/69/d9/d369d9056795f553e244da66e8297cca.png"
//                           alt="Sample avatar"
//                         />
//                       </div>
//                       <p className="font-weight-bold mt-4 mb-3">CSS</p>
//                     </a>
//                     <ul className="inn_line">
//                       <li>
//                         <a href="#">
//                           <div className="mx-auto">
//                             <img
//                               src="https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/10-512.png"
//                               alt="Sample avatar"
//                             />
//                           </div>
//                           <p className="font-weight-bold mt-4 mb-3">
//                             Javascript
//                           </p>
//                         </a>
//                         <ul className="inn_line">
//                           <li>
//                             <a href="#">
//                               <div className="mx-auto">
//                                 <img
//                                   src="https://cdn2.iconfinder.com/data/icons/avatar-vol-1-5/512/7_Asian_avatar_businessman_chinese-512.png"
//                                   alt="Sample avatar"
//                                 />
//                               </div>
//                               <p className="font-weight-bold mt-4 mb-3">
//                                 React JS
//                               </p>
//                             </a>
//                           </li>
//                           <li>
//                             <a href="#">
//                               <div className="mx-auto">
//                                 <img
//                                   src="https://i.pinimg.com/originals/d3/69/d9/d369d9056795f553e244da66e8297cca.png"
//                                   alt="Sample avatar"
//                                 />
//                               </div>
//                               <p className="font-weight-bold mt-4 mb-3">
//                                 Node JS
//                               </p>
//                             </a>
//                           </li>
//                         </ul>
//                       </li>
//                     </ul>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <a href="#">
//                   <div className="mx-auto">
//                     <img
//                       src="https://cdn2.iconfinder.com/data/icons/avatar-vol-1-5/512/7_Asian_avatar_businessman_chinese-512.png"
//                       alt="Sample avatar"
//                     />
//                   </div>
//                   <p className="font-weight-bold mt-4 mb-3">
//                     Mobile App Development
//                   </p>
//                 </a>
//                 <ul className="inn_line">
//                   <li>
//                     <a href="#">
//                       <div className="mx-auto">
//                         <img
//                           src="https://cdn2.iconfinder.com/data/icons/avatar-vol-1-5/512/7_Asian_avatar_businessman_chinese-512.png"
//                           alt="Sample avatar"
//                         />
//                       </div>
//                       <p className="font-weight-bold mt-4 mb-3">Java</p>
//                     </a>
//                     <ul className="inn_line">
//                       <li>
//                         <a href="#">
//                           <div className="mx-auto">
//                             <img
//                               src="https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/10-512.png"
//                               alt="Sample avatar"
//                             />
//                           </div>
//                           <p className="font-weight-bold mt-4 mb-3">Kotlin</p>
//                         </a>
//                         <ul className="inn_line">
//                           <li>
//                             <a href="#">
//                               <div className="mx-auto">
//                                 <img
//                                   src="https://cdn2.iconfinder.com/data/icons/avatar-vol-1-5/512/7_Asian_avatar_businessman_chinese-512.png"
//                                   alt="Sample avatar"
//                                 />
//                               </div>
//                               <p className="font-weight-bold mt-4 mb-3">
//                                 Swift
//                               </p>
//                             </a>
//                           </li>
//                         </ul>
//                       </li>
//                     </ul>
//                   </li>
//                   <li>
//                     <a href="#">
//                       <div className="mx-auto">
//                         <img
//                           src="https://i.pinimg.com/originals/d3/69/d9/d369d9056795f553e244da66e8297cca.png"
//                           alt="Sample avatar"
//                         />
//                       </div>
//                       <p className="font-weight-bold mt-4 mb-3">React Native</p>
//                     </a>
//                     <ul className="inn_line">
//                       <li>
//                         <a href="#">
//                           <div className="mx-auto">
//                             <img
//                               src="https://cdn2.iconfinder.com/data/icons/avatar-vol-1-5/512/7_Asian_avatar_businessman_chinese-512.png"
//                               alt="Sample avatar"
//                             />
//                           </div>
//                           <p className="font-weight-bold mt-4 mb-3">Flutter</p>
//                         </a>
//                         <ul className="inn_line">
//                           <li>
//                             <a href="#">
//                               <div className="mx-auto">
//                                 <img
//                                   src="https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/10-512.png"
//                                   alt="Sample avatar"
//                                 />
//                               </div>
//                               <p className="font-weight-bold mt-4 mb-3">Dart</p>
//                             </a>
//                           </li>
//                         </ul>
//                       </li>
//                     </ul>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <a href="#">
//                   <div className="mx-auto">
//                     <img
//                       src="https://i.pinimg.com/originals/d3/69/d9/d369d9056795f553e244da66e8297cca.png"
//                       alt="Sample avatar"
//                     />
//                   </div>
//                   <p className="font-weight-bold mt-4 mb-3">Game Development</p>
//                 </a>
//                 <ul className="inn_line">
//                   <li>
//                     <a href="#">
//                       <div className="mx-auto">
//                         <img
//                           src="https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/10-512.png"
//                           alt="Sample avatar"
//                         />
//                       </div>
//                       <p className="font-weight-bold mt-4 mb-3">LOVE 2D</p>
//                     </a>
//                     <ul className="inn_line">
//                       <li>
//                         <a href="#">
//                           <div className="mx-auto">
//                             <img
//                               src="https://cdn2.iconfinder.com/data/icons/avatar-vol-1-5/512/7_Asian_avatar_businessman_chinese-512.png"
//                               alt="Sample avatar"
//                             />
//                           </div>
//                           <p className="font-weight-bold mt-4 mb-3">Unity</p>
//                         </a>
//                         <ul className="inn_line">
//                           <li>
//                             <a href="#">
//                               <div className="mx-auto">
//                                 <img
//                                   src="https://i.pinimg.com/originals/d3/69/d9/d369d9056795f553e244da66e8297cca.png"
//                                   alt="Sample avatar"
//                                 />
//                               </div>
//                               <p className="font-weight-bold mt-4 mb-3">
//                                 Unreal Engine
//                               </p>
//                             </a>
//                           </li>
//                           <li>
//                             <a href="#">
//                               <div className="mx-auto">
//                                 <img
//                                   src="https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/10-512.png"
//                                   alt="Sample avatar"
//                                 />
//                               </div>
//                               <p className="font-weight-bold mt-4 mb-3">
//                                 Godot
//                               </p>
//                             </a>
//                           </li>
//                         </ul>
//                       </li>
//                     </ul>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <a href="#">
//                   <div className="mx-auto">
//                     <img
//                       src="https://cdn2.iconfinder.com/data/icons/avatar-vol-1-5/512/7_Asian_avatar_businessman_chinese-512.png"
//                       alt="Sample avatar"
//                     />
//                   </div>
//                   <p className="font-weight-bold mt-4 mb-3">C</p>
//                 </a>
//                 <ul className="inn_line">
//                   <li>
//                     <a href="#">
//                       <div className="mx-auto">
//                         <img
//                           src="https://cdn2.iconfinder.com/data/icons/avatar-vol-1-5/512/7_Asian_avatar_businessman_chinese-512.png"
//                           alt="Sample avatar"
//                         />
//                       </div>
//                       <p className="font-weight-bold mt-4 mb-3">C++</p>
//                     </a>
//                     <ul className="inn_line">
//                       <li>
//                         <a href="#">
//                           <div className="mx-auto">
//                             <img
//                               src="https://i.pinimg.com/originals/d3/69/d9/d369d9056795f553e244da66e8297cca.png"
//                               alt="Sample avatar"
//                             />
//                           </div>
//                           <p className="font-weight-bold mt-4 mb-3">Rust</p>
//                         </a>
//                         <ul className="inn_line">
//                           <li>
//                             <a href="#">
//                               <div className="mx-auto">
//                                 <img
//                                   src="https://cdn2.iconfinder.com/data/icons/avatar-vol-1-5/512/7_Asian_avatar_businessman_chinese-512.png"
//                                   alt="Sample avatar"
//                                 />
//                               </div>
//                               <p className="font-weight-bold mt-4 mb-3">
//                                 Scala
//                               </p>
//                             </a>
//                           </li>
//                         </ul>
//                       </li>
//                     </ul>
//                   </li>
//                   <li>
//                     <a href="#">
//                       <div className="mx-auto">
//                         <img
//                           src="https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/10-512.png"
//                           alt="Sample avatar"
//                         />
//                       </div>
//                       <p className="font-weight-bold mt-4 mb-3">C#</p>
//                     </a>
//                     <ul className="inn_line">
//                       <li>
//                         <a href="#">
//                           <div className="mx-auto">
//                             <img
//                               src="https://cdn2.iconfinder.com/data/icons/avatar-vol-1-5/512/7_Asian_avatar_businessman_chinese-512.png"
//                               alt="Sample avatar"
//                             />
//                           </div>
//                           <p className="font-weight-bold mt-4 mb-3">Go</p>
//                         </a>
//                         <ul className="inn_line">
//                           <li>
//                             <a href="#">
//                               <div className="mx-auto">
//                                 <img
//                                   src="https://i.pinimg.com/originals/d3/69/d9/d369d9056795f553e244da66e8297cca.png"
//                                   alt="Sample avatar"
//                                 />
//                               </div>
//                               <p className="font-weight-bold mt-4 mb-3">
//                                 Assembly
//                               </p>
//                             </a>
//                           </li>
//                         </ul>
//                       </li>
//                     </ul>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <a href="#">
//                   <div className="mx-auto">
//                     <img
//                       src="https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/10-512.png"
//                       alt="Sample avatar"
//                     />
//                   </div>
//                   <p className="font-weight-bold mt-4 mb-3">
//                     Artificial Intelligence
//                   </p>
//                 </a>
//                 <ul className="inn_line">
//                   <li>
//                     <a href="#">
//                       <div className="mx-auto">
//                         <img
//                           src="https://cdn2.iconfinder.com/data/icons/avatar-vol-1-5/512/7_Asian_avatar_businessman_chinese-512.png"
//                           alt="Sample avatar"
//                         />
//                       </div>
//                       <p className="font-weight-bold mt-4 mb-3">Python</p>
//                     </a>
//                     <ul className="inn_line">
//                       <li>
//                         <a href="#">
//                           <div className="mx-auto">
//                             <img
//                               src="https://i.pinimg.com/originals/d3/69/d9/d369d9056795f553e244da66e8297cca.png"
//                               alt="Sample avatar"
//                             />
//                           </div>
//                           <p className="font-weight-bold mt-4 mb-3">Keras</p>
//                         </a>
//                         <ul className="inn_line">
//                           <li>
//                             <a href="#">
//                               <div className="mx-auto">
//                                 <img
//                                   src="https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/10-512.png"
//                                   alt="Sample avatar"
//                                 />
//                               </div>
//                               <p className="font-weight-bold mt-4 mb-3">
//                                 Tensorflow
//                               </p>
//                             </a>
//                           </li>
//                           <li>
//                             <a href="#">
//                               <div className="mx-auto">
//                                 <img
//                                   src="https://cdn2.iconfinder.com/data/icons/avatar-vol-1-5/512/7_Asian_avatar_businessman_chinese-512.png"
//                                   alt="Sample avatar"
//                                 />
//                               </div>
//                               <p className="font-weight-bold mt-4 mb-3">
//                                 PyTorch
//                               </p>
//                             </a>
//                           </li>
//                         </ul>
//                       </li>
//                     </ul>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

// export default Skills;
