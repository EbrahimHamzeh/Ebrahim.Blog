using System;

namespace Ebrahim.Blog.Common.GuardToolkit
{
    public static class GuardExt
    {
        public static void CheckArgumentIsNull(this object o, string name)
        {
            if (o == null)
                throw new ArgumentNullException(name);
        }

    }
}
