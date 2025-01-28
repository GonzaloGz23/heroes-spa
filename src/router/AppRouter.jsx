import { Route, Routes } from 'react-router-dom';

import { HeroesRouters } from '../heroes';
import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return (
        <>
            <Routes>
             {/* Forma 1 */}
              {/*   <Route path="/login" element={
                    <PublicRoute>
                        {<LoginPage />}
                    </PublicRoute>
                }/> */}

                {/* Forma 2 */}
                <Route path='login/*' element={ 
                    <PublicRoute>
                        <Routes>
                            <Route path='/*' element={<LoginPage />} />
                        </Routes>
                    </PublicRoute>
                    
                } />


                <Route path='/*' element={
                    <PrivateRoute>
                        {<HeroesRouters />}
                    </PrivateRoute>
                } />
                {/* La barra inclinada /* actúa como un comodín que captura todas las rutas que no  hayan sido capturadas por otros componentes de ruta más específicos. */}
            </Routes>
        </>
    )
}
